# vite-plugin-laravel-purgecss

[![Get package from npm](https://img.shields.io/npm/v/@erbelion/vite-plugin-laravel-purgecss?logo=npm&logoColor=white&style=flat&label=)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss) [![Downloads](https://img.shields.io/npm/dt/@erbelion/vite-plugin-laravel-purgecss?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss) [![Downloads](https://img.shields.io/npm/dw/@erbelion/vite-plugin-laravel-purgecss?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss)

A [Vite](https://github.com/vitejs/vite) plugin that integrates [PurgeCSS](https://github.com/FullHuman/purgecss) with [Laravel](https://github.com/laravel/laravel) template assets.

Apart from Blade, it also supports frontend frameworks such as Svelte, Vue, React and Angular. It works well with [Inertia](https://github.com/inertiajs/inertia).

## Installation
**yarn**
```
yarn add @erbelion/vite-plugin-laravel-purgecss --dev
```
**npm**
```
npm i @erbelion/vite-plugin-laravel-purgecss --save-dev
```

## Usage
Use plugin in your Vite config (`vite.config.ts`)

```
import purge from '@erbelion/vite-plugin-laravel-purgecss'

export default {
    plugins: [
        purge({
            templates: ['blade']
        })
    ]
}
```

## Options

| Parameter | Type  | Description |
| ----------- | -----------  | ---------- |
| [templates](#templates)? | `string[]` | List of templates to be processed by PurgeCSS. [See below](#templates). |
| paths? | `string[]` | List of paths to be processed by PurgeCSS. |
| safelist? | `UserDefinedSafelist` | Check available safelist options [in PurgeCSS docs](https://purgecss.com/configuration.html#options).

### Templates

| Parameter | Path(s) to be processed |
| ----------- | ----------- |
| blade | `resources/views/**/*.blade.php` |
| svelte | `resources/views/**/*.svelte`<br/>`resources/js/**/*.svelte` |
| vue | `resources/views/**/*.vue`<br/>`resources/js/**/*.vue` |
| react | `resources/views/**/*.tsx`<br/>`resources/views/**/*.ts`<br/>`resources/views/**/*.jsx`<br/>`resources/views/**/*.js`<br/>`resources/views/**/*.html`<br/>`resources/js/**/*.tsx`<br/>`resources/js/**/*.ts`<br/>`resources/js/**/*.jsx`<br/>`resources/js/**/*.js`<br/>`resources/js/**/*.html` |
| angular | `resources/views/**/*.html`<br/>`resources/js/**/*.html` |

You may also provide custom paths via `paths` option.
