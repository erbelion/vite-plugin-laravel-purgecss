import type { UserDefinedOptions } from "purgecss"
import { Options, FilteredOptions } from "./types"
import processDeprecatedTemplates from "./deprecated/templates/process-templates"

export default (options?: Options): FilteredOptions => {
    const paths: string[] = []

    // adding paths
    options?.paths?.forEach((path) => {
        if (path) paths.push(path)
    })

    // @deprecated
    // adding templates to paths
    const templates = processDeprecatedTemplates(options?.templates)
    if (templates.length) {
        paths.push(...templates)
    }

    // if paths are empty, put default value
    if (paths.length === 0) {
        paths.push("resources/{js,views}/**/*.{blade.php,svelte,vue,html}")
    }

    // rehash option
    const rehash = options?.rehash ?? true

    // preparing PurgeCSS options
    const keysToDelete = ["css", "content", "paths", "templates", "rehash"]
    const purgeOptions: Partial<UserDefinedOptions> = { ...(options ?? {}) }
    keysToDelete.forEach((key) => {
        delete (purgeOptions as Record<string, unknown>)[key]
    })

    return {
        paths,
        purgeOptions,
        rehash,
    }
}
