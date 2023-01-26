export default function(template: string): string {
    switch(template){
        case 'blade':
            return 'resources/views/**/*.blade.php'
        case 'svelte':
            return 'resources/{js,views}/**/*.svelte'
        case 'vue':
            return 'resources/{js,views}/**/*.vue'
        case 'react':
            return 'resources/{js,views}/**/*.{tsx,ts,jsx,js,html}'
        case 'angular':
            return 'resources/{js,views}/**/*.html'
        default:
            throw new Error(`Template ${template} is not supported`)
    }
}