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
        console.warn(
            `\n[@erbelion/vite-plugin-laravel-purgecss] ⚠️  The "templates" option is deprecated and will be removed in a future release. Please use "paths" instead.`,
        )
        paths.push(...templates)
    }

    // if paths are empty, put default value
    if (paths.length === 0) {
        paths.push("resources/{js,views}/**/*.{blade.php,svelte,vue,html}")
    }

    // @experimental
    // rehash option
    const rehash = options?.rehash ?? false
    if (rehash) {
        console.warn(
            `\n[@erbelion/vite-plugin-laravel-purgecss] ⚠️  The "rehash" option is experimental - it patches manifest.json on disk after Vite writes it. Behaviour may break across Vite versions.`,
        )
    }

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
