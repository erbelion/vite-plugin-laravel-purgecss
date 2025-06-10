import { UserDefinedOptions } from "purgecss"

type PluginOptions = {
    paths?: string[]
    rehash?: boolean
}

type EntryPluginOptions = PluginOptions & {
    templates?: string[]
}

export type Options = EntryPluginOptions & Partial<UserDefinedOptions>

export type FilteredOptions = PluginOptions & {
    purgeOptions: Partial<UserDefinedOptions>
}
