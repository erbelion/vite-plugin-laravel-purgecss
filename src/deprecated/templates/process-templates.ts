import getTemplatePath from "./get-template-path"

export default (templates?: string[]): string[] => {
    const paths: string[] = []

    templates?.forEach((template) => paths.push(getTemplatePath(template)))

    return paths
}
