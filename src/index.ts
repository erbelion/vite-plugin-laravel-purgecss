import type { Plugin, ResolvedConfig } from "vite"
import { PurgeCSS } from "purgecss"

import type { Options } from "./types"
import filterOptions from "./filter-options"
import { isOutputAsset } from "./utils"
import rehasher from "./experimental/rehasher"

export default (_options?: Options): Plugin => {
    const renamedFiles = new Map<string, string>()
    let outDir: string
    let shouldRehash: boolean

    return {
        name: "vite-plugin-laravel-purgecss",
        enforce: "post",

        configResolved(config: ResolvedConfig) {
            outDir = config.build.outDir
        },

        async generateBundle(_, bundle) {
            renamedFiles.clear()

            const { paths, purgeOptions } = filterOptions(_options)
            shouldRehash = _options.rehash

            // identify css files within the bundle
            const cssFiles = Object.keys(bundle).filter((key) =>
                key.endsWith(".css"),
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

                asset.source = newCss

                if (shouldRehash)
                    rehasher.renameFile(renamedFiles, file, newCss)
            }
        },

        async writeBundle(_, bundle) {
            if (shouldRehash)
                await rehasher.applyToManifest(
                    renamedFiles,
                    Object.keys(bundle),
                    outDir,
                )
        },
    }
}
