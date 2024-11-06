import { UserDefinedOptions } from "purgecss"

type PluginOptions = {
    paths?: string[]
}

type EntryPluginOptions = PluginOptions & {
    templates?: string[]
}

export type Options = EntryPluginOptions & Partial<UserDefinedOptions>

export type FilteredOptions = PluginOptions & {
    purge: Partial<UserDefinedOptions>
}
