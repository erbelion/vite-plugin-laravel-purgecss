const templates = {
    blade: "resources/views/**/*.blade.php",
    svelte: "resources/{js,views}/**/*.svelte",
    vue: "resources/{js,views}/**/*.vue",
    react: "resources/{js,views}/**/*.{tsx,ts,jsx,js,html}",
    angular: "resources/{js,views}/**/*.html",
}

export default (template: string): string => {
    if (!(template in templates))
        throw new Error(`Template ${template} is not supported`)

    return templates[template]
}
