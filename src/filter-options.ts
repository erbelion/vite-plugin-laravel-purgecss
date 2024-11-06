import { Options, FilteredOptions } from "./types"
import processTemplates from "./deprecated/templates/process-templates"

export default (options?: Options): FilteredOptions => {
    const paths = []

    // adding paths
    options?.paths?.forEach((path) => paths.push(path))

    // @deprecated
    // adding templates to paths
    paths.concat(processTemplates(options?.templates))

    // if paths are empty, put default value
    if(paths.length === 0){
        paths.push("resources/{js,views}/**/*.{blade.php,svelte,vue,html}")
    }

    const purgeOptions = options
    const keysToDelete = ['css', 'content', 'paths', 'templates']
    if (purgeOptions) {
        keysToDelete.forEach(key => delete options[key])
    }

    return {
        paths: paths,
        purge: purgeOptions
    }
}