export default function(template: string): string[]{
    switch(template){
        case 'blade':
            return [
                'resources/views/**/*.blade.php'
            ]
        case 'svelte':
            return [
                'resources/js/**/*.svelte',
                'resources/views/**/*.svelte'
            ]
        case 'vue':
            return [
                'resources/js/**/*.vue',
                'resources/views/**/*.vue'
            ]
        case 'react':
            return [
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
            ]
        case 'angular':
            return [
                'resources/js/**/*.html',
                'resources/views/**/*.html'
            ]
    }

    return []
}