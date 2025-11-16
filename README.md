# vite-plugin-laravel-purgecss

[![Get package from npm](https://img.shields.io/npm/v/@erbelion/vite-plugin-laravel-purgecss?logo=npm&logoColor=white&style=flat&label=)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss) [![Downloads](https://img.shields.io/npm/dt/@erbelion/vite-plugin-laravel-purgecss?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss) [![Downloads](https://img.shields.io/npm/dw/@erbelion/vite-plugin-laravel-purgecss?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss) [![views](https://views.erbek.space/api/views.svg?id=github.com%2Ferbelion%2Fvite-plugin-laravel-purgecss)](https://views.erbek.space/page/?id=github.com%2Ferbelion%2Fvite-plugin-laravel-purgecss)

A [Vite](https://github.com/vitejs/vite) plugin that integrates [PurgeCSS](https://github.com/FullHuman/purgecss) with [Laravel 9-12](https://github.com/laravel/laravel) template assets (currently updated up to laravel/laravel@12.10.1).

This plugin purges unused CSS assets only in production mode (`pnpm build` / `yarn build` / `npm run build`).

## 📦 Installation

**Using pnpm:**

```bash
pnpm add -D @erbelion/vite-plugin-laravel-purgecss
```

**Using yarn:**

```bash
yarn add -D @erbelion/vite-plugin-laravel-purgecss
```

**Using npm:**

```bash
npm i -D @erbelion/vite-plugin-laravel-purgecss
```

## 🚀 Usage

To use the plugin in your Vite configuration (`vite.config.ts`):

```typescript
import purge from '@erbelion/vite-plugin-laravel-purgecss'

export default {
    plugins: [
        laravel(...),
        purge()
    ]
}
```

**[See more examples](#-other-examples)**

## 🛠️ Options

| Parameter        | Type                          | Optional | Description                                                                                                                            |
| ---------------- | ----------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| paths            | `string[]`                    | Yes      | List of paths to be processed by PurgeCSS.                                                                                             |
| rehash           | `boolean`                     | Yes      | Determines whether to hash asset filenames after purging.                                                                              |
| PurgeCSS Options | `Partial<UserDefinedOptions>` | Yes      | PurgeCSS options [(see docs)](https://purgecss.com/configuration.html#options).                                                        |
| templates        | `string[]`                    | Yes      | ❌ Deprecated [(see anyway)](https://github.com/erbelion/vite-plugin-laravel-purgecss/blob/main/src/deprecated/DEPRECATED-OPTIONS.md). |

### `paths` Option

If the `paths` option isn't specified, it will default to:

```text
resources/{js,views}/**/*.{blade.php,svelte,vue,html}
```

### `rehash` Option

If the `rehash` option isn't specified, it will default to `true`

### All Options

```typescript
type Options = {
    // Plugin options
    paths?: string[] // Defaults to `resources/{js,views}/**/*.{blade.php,svelte,vue,html}`
    rehash?: boolean // Defaults to `true`
    templates?: string[] // ❌ Deprecated

    // PurgeCSS options
    defaultExtractor?: ExtractorFunction
    extractors?: Array<Extractors>
    fontFace?: boolean
    keyframes?: boolean
    output?: string
    rejected?: boolean
    rejectedCss?: boolean
    stdin?: boolean
    stdout?: boolean
    variables?: boolean
    safelist?: UserDefinedSafelist
    blocklist?: StringRegExpArray
}
```

## 💡 Other Examples

**Via custom path:**

```typescript
purge({
    paths: ["resources/{js,views}/**/*.{blade.php,svelte,vue,html}"],
})
```

**Via custom paths + safe list styling:** (always keep `#bruh`, `.nice-button`, and `h1` styling)

```typescript
purge({
    paths: ["resources/views/**/*.blade.php", "resources/{js,views}/**/*.vue"],
    safelist: ["bruh", "nice-button", "h1"],
})
```

**Example config with fix for escaped prefixes (`sm:`, `lg:`, etc.):**

```typescript
purge({
    extractors: [
        {
            extractor: (content) => {
                return content.match(/[a-z-_:\/]+/g) || []
            },
            extensions: ["php", "vue", "html"],
        },
    ],
})
```

## 📚 Tutorial

[https://github.com/erbelion/tutorial-vite-plugin-laravel-purgecss](https://github.com/erbelion/tutorial-vite-plugin-laravel-purgecss#tutorial-vite-plugin-laravel-purgecss)

## 👉 See Also

-   [vite-plugin-sveltekit-purgecss](https://github.com/erbelion/vite-plugin-sveltekit-purgecss)
