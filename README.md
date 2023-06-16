# vite-plugin-laravel-purgecss

[![Get package from npm](https://img.shields.io/npm/v/@erbelion/vite-plugin-laravel-purgecss?logo=npm&logoColor=white&style=flat&label=)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss) [![Downloads](https://img.shields.io/npm/dt/@erbelion/vite-plugin-laravel-purgecss?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss) [![Downloads](https://img.shields.io/npm/dw/@erbelion/vite-plugin-laravel-purgecss?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss) [![views](https://views.erbek.space/api/views.svg?id=github.com%2Ferbelion%2Fvite-plugin-laravel-purgecss)](https://views.erbek.space/page/?id=github.com%2Ferbelion%2Fvite-plugin-laravel-purgecss)

A [Vite](https://github.com/vitejs/vite) plugin that integrates [PurgeCSS](https://github.com/FullHuman/purgecss) with [Laravel 10/9](https://github.com/laravel/laravel) template assets (currently updated to 10.13).

It purges assets only on production mode (`yarn build`/`npm run build`).

## Installation

**yarn**

```
yarn add -D @erbelion/vite-plugin-laravel-purgecss
```

**npm**

```
npm i -D @erbelion/vite-plugin-laravel-purgecss
```

## Usage examples

Use plugin in your Vite config (`vite.config.ts`)

**Blade via [template option](#templates):**
```
import purge from '@erbelion/vite-plugin-laravel-purgecss'

export default {
    plugins: [
        laravel(...),
        purge({
            templates: ['blade']
        })
    ]
}
```

**Vue via [template option](#templates):**
```
import purge from '@erbelion/vite-plugin-laravel-purgecss'

export default {
    plugins: [
        laravel(...),
        purge({
            templates: ['blade', 'vue']
        })
    ]
}
```

**Via custom path:**
```
import purge from '@erbelion/vite-plugin-laravel-purgecss'

export default {
    plugins: [
        laravel(...),
        purge({
            paths: ['resources/views/**/*.blade.php']
        })
    ]
}
```

**Via custom paths + always keep `#bruh`, `.nice-button` and `h1` styling:**
```
import purge from '@erbelion/vite-plugin-laravel-purgecss'

export default {
    plugins: [
        laravel(...),
        purge({
            paths: [
                'resources/views/**/*.blade.php',
                'resources/{js,views}/**/*.vue'
            ],
            safelist: ['bruh', 'nice-button', 'h1']
        })
    ]
}
```

## Options

| Parameter                | Type                  | Description                                                                                           |
| ------------------------ | --------------------- | ----------------------------------------------------------------------------------------------------- |
| [templates](#templates)? | `string[]`            | List of ready paths to be processed by PurgeCSS. [See below](#templates).                               |
| paths?                   | `string[]`            | List of paths to be processed by PurgeCSS.                                                            |
| safelist?                | `UserDefinedSafelist` | Check available safelist options in [PurgeCSS docs](https://purgecss.com/configuration.html#options). |

### Templates

| Parameter | Path to be processed                             |
| --------- | ------------------------------------------------ |
| blade     | `resources/views/**/*.blade.php`                 |
| svelte    | `resources/{js,views}/**/*.svelte`               |
| vue       | `resources/{js,views}/**/*.vue`                  |
| react     | `resources/{js,views}/**/*.{tsx,ts,jsx,js,html}` |
| angular   | `resources/{js,views}/**/*.html`                 |

You may also provide custom paths via `paths` option.

## See also

[vite-plugin-sveltekit-purgecss](https://github.com/erbelion/vite-plugin-sveltekit-purgecss)
