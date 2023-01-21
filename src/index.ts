import PurgeCSS, { UserDefinedSafelist } from 'purgecss'
import getTemplatePaths from './getTemplatePaths'

type Options = {
    templates?: string[],
    paths?: string[],
    safelist?: UserDefinedSafelist
}

export default (options?: Options) => {
    return {
        name: 'vite-plugin-laravel-purgecss',
        enforce: 'post',
        async generateBundle(_options, bundle) {
            const cssFiles = Object.keys(bundle).filter(key => key.endsWith('.css'))
            if (!cssFiles) return
            
            let paths = []
            options?.paths?.forEach(path => paths.push(path))
            options?.templates?.forEach(template => paths.push(...getTemplatePaths(template)))

            for (const file of cssFiles) {
                const purged = await new PurgeCSS().purge({
                    content: paths,
                    css: [{raw: bundle[file].source}],
                    safelist: options?.safelist || []
                })
                bundle[file].source = purged[0].css
            }
        }
    }
}