import { UserDefinedSafelist, Extractors } from 'purgecss';
import { Plugin } from 'vite';

type Options = {
    templates?: string[];
    paths?: string[];
    safelist?: UserDefinedSafelist;
    extractors?: Extractors[];
};
declare const _default: (options?: Options) => Plugin;

export { _default as default };
