import PurgeCSS, { UserDefinedSafelist } from "purgecss"

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
            options?.paths?.forEach(path => { paths.push(path) })
            options?.templates?.forEach(path => {
                switch(path){
                    case 'blade':
                        paths.push(
                            'resources/views/**/*.blade.php'
                        )
                        break
                    case 'svelte':
                        paths.push(
                            'resources/js/**/*.svelte',
                            'resources/views/**/*.svelte'
                        )
                        break
                    case 'vue':
                        paths.push(
                            'resources/js/**/*.vue',
                            'resources/views/**/*.vue'
                        )
                        break
                    case 'react':
                        paths.push(
                            'resources/js/**/*.tsx',
                            'resources/js/**/*.ts',
                            'resources/js/**/*.jsx',
                            'resources/js/**/*.js',
                            'resources/js/**/*.html',
                            'resources/views/**/*.tsx',
                            'resources/views/**/*.ts',
                            'resources/views/**/*.jsx',
                            'resources/views/**/*.js',
                            'resources/views/**/*.html'
                        )
                        break
                    case 'angular':
                        paths.push(
                            'resources/js/**/*.html',
                            'resources/views/**/*.html'
                        )
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