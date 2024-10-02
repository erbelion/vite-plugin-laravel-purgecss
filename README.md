# vite-plugin-laravel-purgecss

[![Get package from npm](https://img.shields.io/npm/v/@erbelion/vite-plugin-laravel-purgecss?logo=npm&logoColor=white&style=flat&label=)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss) [![Downloads](https://img.shields.io/npm/dt/@erbelion/vite-plugin-laravel-purgecss?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss) [![Downloads](https://img.shields.io/npm/dw/@erbelion/vite-plugin-laravel-purgecss?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss) [![views](https://views.erbek.space/api/views.svg?id=github.com%2Ferbelion%2Fvite-plugin-laravel-purgecss)](https://views.erbek.space/page/?id=github.com%2Ferbelion%2Fvite-plugin-laravel-purgecss)

A [Vite](https://github.com/vitejs/vite) plugin that integrates [PurgeCSS](https://github.com/FullHuman/purgecss) with [Laravel 11/10](https://github.com/laravel/laravel) template assets (currently updated to laravel/laravel@11.2.0).

It purges assets only in production mode (`yarn build`/`npm run build`).

## Installation

**yarn**

```
yarn add @erbelion/vite-plugin-laravel-purgecss
```

**npm**

```
npm i @erbelion/vite-plugin-laravel-purgecss
```

## Usage

Use plugin in your Vite config (`vite.config.ts`)
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

**[See more examples](#other-examples)**

## Options

| Parameter                | Type                  | Description                                                                                           |
| ------------------------ | --------------------- | ----------------------------------------------------------------------------------------------------- |
| [templates](#templates)? | `string[]`            | List of ready paths to be processed by PurgeCSS. [See below](#templates).                             |
| paths?                   | `string[]`            | List of paths to be processed by PurgeCSS.                                                            |
| safelist?                | `UserDefinedSafelist` | Check available safelist options in [PurgeCSS docs](https://purgecss.com/configuration.html#options). |
| extractors?              | `Extractors[]`        | Check available extractors options in [PurgeCSS docs](https://purgecss.com/extractors.html#using-an-extractor).                          |


### Templates

| Parameter | Path to be processed                             |
| --------- | ------------------------------------------------ |
| blade     | `resources/views/**/*.blade.php`                 |
| svelte    | `resources/{js,views}/**/*.svelte`               |
| vue       | `resources/{js,views}/**/*.vue`                  |
| react     | `resources/{js,views}/**/*.{tsx,ts,jsx,js,html}` |
| angular   | `resources/{js,views}/**/*.html`                 |

You may also provide custom paths via `paths` option.

## Other examples

**Vue via template option:**
```
purge({
    templates: ['blade', 'vue']
})
```

**Via custom path:**
```
purge({
    paths: ['resources/views/**/*.blade.php']
})
```

**Via custom paths + always keep `#bruh`, `.nice-button` and `h1` styling:**
```
purge({
    paths: [
        'resources/views/**/*.blade.php',
        'resources/{js,views}/**/*.vue'
    ],
    safelist: ['bruh', 'nice-button', 'h1']
})
```

**Example config with fix for escaped prefixes (`sm:`, `lg:`, etc.):**
```
purge({
    paths: [
        'resources/views/**/*.blade.php',
        'resources/{js,views}/**/*.vue'
    ],
    extractors: [
        {
            extractor: (content) => {
                return content.match(/[a-z-_:\/]+/g) || []
            },
            extensions: ['php', 'vue', 'html']
        }
    ]
})
```

## Tutorial

[https://github.com/erbelion/tutorial-vite-plugin-laravel-purgecss](https://github.com/erbelion/tutorial-vite-plugin-laravel-purgecss#tutorial-vite-plugin-laravel-purgecss)

## See also

[vite-plugin-sveltekit-purgecss](https://github.com/erbelion/vite-plugin-sveltekit-purgecss)
