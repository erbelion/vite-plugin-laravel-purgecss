import type { Plugin } from "vite"
import { PurgeCSS } from "purgecss"
import type { OutputBundle } from "rollup"

import type { Options } from "./types"
import filterOptions from "./filter-options"
import { isOutputAsset, hash } from "./utils"

export default (_options?: Options): Plugin => {
    return {
        name: "vite-plugin-laravel-purgecss",
        enforce: "post",
        async generateBundle(_, bundle: OutputBundle) {
            const { paths, purgeOptions, rehash } = filterOptions(_options)

            // identify css files within the bundle
            const cssFiles = Object.keys(bundle).filter((key) =>
                key.endsWith(".css")
            )
            if (cssFiles.length === 0) return

            // process each css file in the bundle
            for (const file of cssFiles) {
                const asset = bundle[file]
                if (!isOutputAsset(asset)) continue

                // run purgecss on the asset's source
                const purged = await new PurgeCSS().purge({
                    content: paths,
                    css: [{ raw: asset.source as string }],
                    ...purgeOptions,
                })

                const newCss = purged[0]?.css ?? ""

                // update the asset in the bundle without rehashing
                if (!rehash) {
                    asset.source = newCss
                    continue
                }

                // create a new file name with a hash of the purged css
                const newFileName = file.replace(
                    /\.css$/,
                    `-${hash(newCss)}.css`
                )

                // remove the old asset and add the new, hashed asset to the bundle
                delete bundle[file]
                bundle[newFileName] = {
                    ...asset,
                    fileName: newFileName,
                    source: newCss,
                    type: "asset",
                }
            }
        },
    }
}
