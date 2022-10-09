import PurgeCSS, { UserDefinedSafelist } from "purgecss";

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
            options?.paths?.forEach(key => { paths.push(key) })
            options?.templates?.forEach(key => {
                switch(key){
                    case 'blade':
                        paths.push('resources/views/**/*.blade.php')
                        break
                    case 'svelte':
                        paths.push('resources/js/**/*.svelte')
                        break
                    case 'vue':
                        paths.push('resources/js/**/*.vue')
                        break
                    case 'react':
                        paths.push(
                            'resources/js/**/*.tsx',
                            'resources/js/**/*.ts',
                            'resources/js/**/*.jsx',
                            'resources/js/**/*.js',
                            'resources/js/**/*.html'
                        )
                        break
                    case 'angular':
                        paths.push('resources/js/**/*.html')
                        break
                }
            })

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