import { PurgeCSS, UserDefinedSafelist, Extractors } from "purgecss"
import getTemplatePath from "./getTemplatePath"
import { Plugin } from "vite"
import { OutputBundle, OutputAsset } from "vite/node_modules/rollup/dist/rollup"

type Options = {
    templates?: string[]
    paths?: string[]
    safelist?: UserDefinedSafelist
    extractors?: Extractors[]
}

const isOutputAsset = (
    bundle: OutputBundle[keyof OutputBundle]
): bundle is OutputAsset => bundle.type === "asset"

export default (options?: Options): Plugin => {
    return {
        name: "vite-plugin-laravel-purgecss",
        enforce: "post",
        async generateBundle(_options, bundle: OutputBundle) {
            const cssFiles = Object.keys(bundle).filter((key) =>
                key.endsWith(".css")
            )
            if (!cssFiles) return

            let paths = []
            options?.paths?.forEach((path) => paths.push(path))
            options?.templates?.forEach((template) =>
                paths.push(getTemplatePath(template))
            )

            for (const file of cssFiles) {
                if (!isOutputAsset(bundle[file])) continue

                const purged = await new PurgeCSS().purge({
                    content: paths,
                    css: [{ raw: bundle[file]["source"] }],
                    safelist: options?.safelist || [],
                    extractors: options?.extractors || [],
                })
                bundle[file]["source"] = purged[0].css
            }
        },
    }
}
