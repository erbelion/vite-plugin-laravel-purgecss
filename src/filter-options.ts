import { Options, FilteredOptions } from "./types"
import processTemplates from "./deprecated/templates/process-templates"

export default (options?: Options): FilteredOptions => {
    const paths: string[] = []

    // adding paths
    options?.paths?.forEach((path) => paths.push(path))

    // @deprecated
    // adding templates to paths
    paths.concat(processTemplates(options?.templates))

    // if paths are empty, put default value
    if (paths.length === 0) {
        paths.push("resources/{js,views}/**/*.{blade.php,svelte,vue,html}")
    }

    // rehash option
    const rehash = options?.rehash !== undefined ? options.rehash : true

    // preparing PurgeCSS options
    const purgeOptions = options
    const keysToDelete = ["css", "content", "paths", "templates", "rehash"]
    if (purgeOptions) {
        keysToDelete.forEach((key) => delete purgeOptions[key])
    }

    return {
        paths,
        purgeOptions,
        rehash,
    }
}
