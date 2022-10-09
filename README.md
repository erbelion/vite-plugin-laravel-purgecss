# vite-plugin-laravel-purgecss

[![Experimental version](https://img.shields.io/badge/-experimental-red)](#) [![Get package from npm](https://img.shields.io/npm/v/@erbelion/vite-plugin-laravel-purgecss?color=blue)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss)

A [Vite](https://github.com/vitejs/vite) plugin that integrates [PurgeCSS](https://github.com/FullHuman/purgecss) with [Laravel](https://github.com/laravel/laravel) template assets.

Apart from Blade, it also supports frontend frameworks such as Svelte, Vue, React and Angular. It works well with [Inertia](https://github.com/inertiajs/inertia).

## Install
**Yarn**
```
yarn add @erbelion/vite-plugin-laravel-purgecss -D
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
| [templates](#templates)? | `Array<String>` | List of templates to be processed by PurgeCSS. [See below](#templates). |
| paths? | `Array<String>` | List of paths to be processed by PurgeCSS. |
| safelist? | `UserDefinedSafelist` | Check [available safelist options in PurgeCSS docs](https://purgecss.com/configuration.html#options).

### Templates

| Parameter | Path(s) to be processed |
| ----------- | ----------- |
| blade | `resources/views/**/*.blade.php` |
| svelte | `resources/js/**/*.svelte` |
| vue | `resources/js/**/*.vue` |
| react | `resources/js/**/*.tsx`<br/>`resources/js/**/*.ts`<br/>`resources/js/**/*.jsx`<br/>`resources/js/**/*.js`<br/>`resources/js/**/*.html` |
| angular | `resources/js/**/*.html` |

You may also provide custom paths via `paths` option.
