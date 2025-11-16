import type { UserDefinedOptions } from "purgecss"

interface PluginOptions {
    paths?: string[]
    rehash?: boolean
}

interface EntryPluginOptions extends PluginOptions {
    templates?: string[]
}

export type Options = EntryPluginOptions & Partial<UserDefinedOptions>

export interface FilteredOptions extends PluginOptions {
    purgeOptions: Partial<UserDefinedOptions>
}
