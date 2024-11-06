import getTemplatePath from "./get-template-path"

export default (templates?: string[]): string[] => {
    const paths: string[] = []

    if(templates?.length > 0) {
        console.warn(
            `\n[@erbelion/vite-plugin-laravel-purgecss] The "templates" option is deprecated and will be removed in a future release. Please use "paths" instead.`
        )
    }

    templates?.forEach((template) =>
        paths.push(getTemplatePath(template))
    )

    return paths
}