# Changelog

## 0.4.0

-   added asset filenames hashing after css purging to reflect content changes. the filenames now include a hash of the purged css content to ensure cache busting. this behavior can be disabled via the rehash option (default: true).
-   @edwinvdpol bumped the vite (➡️ ^6.3.5) and tsup (➡️ ^8.3.5) versions, resolving [security vulnerabilities](https://github.com/erbelion/vite-plugin-laravel-purgecss/pull/10#issue-3120661118)
-   minor changes

## 0.3.4

-   @jochensengier and @iBotPeaches bumped the vite (➡️ ^6.0.3) version

## 0.3.3

-   fixed path defaulting

## 0.3.0

-   added every purgecss option (earlier we only had safelist and extractors)
-   @edwinvdpol bumped the vite (➡️ ^5.4.10) version
-   now more vite versions are compatible with the plugin (^4.0.0 ➡️ >=3 <6)
-   deprecated `templates` option to simplify the plugin

## 0.2.6

-   @edwinvdpol bumped the purgecss (➡️ ^6.0.0) version

## 0.2.4

-   updated readme to laravel@11.0.7

## 0.2.3

-   added postcss^8.4.31 requirement to avoid vulnerability [(more info here)](https://github.com/erbelion/vite-plugin-laravel-purgecss/issues/7)

## 0.2.2

-   @naykel76 added extractors

## 0.2.1

-   fixed _TypeError: purge is not a function_
