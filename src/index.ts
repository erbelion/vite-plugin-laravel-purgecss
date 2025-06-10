import { Options } from "./types"
import { Plugin } from "vite"
import { PurgeCSS } from "purgecss"
import { OutputBundle, OutputAsset } from "rollup"
import filterOptions from "./filter-options"

const isOutputAsset = (
    bundle: OutputBundle[keyof OutputBundle]
): bundle is OutputAsset => bundle.type === "asset"

export default (_options?: Options): Plugin => {
    return {
        name: "vite-plugin-laravel-purgecss",
        enforce: "post",
        async generateBundle(_, bundle: OutputBundle) {
            const { paths, purge: purgeOptions } = filterOptions(_options)

            const cssFiles = Object.keys(bundle).filter((key) =>
                key.endsWith(".css")
            )
            if (!cssFiles) return

            for (const file of cssFiles) {
                if (!isOutputAsset(bundle[file])) continue

                const purged = await new PurgeCSS().purge({
                    content: paths,
                    css: [{ raw: bundle[file]["source"] }],
                    ...purgeOptions,
                })
                bundle[file]["source"] = purged[0].css
            }
        },
    }
}
