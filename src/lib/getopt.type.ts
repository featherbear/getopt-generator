
type ShortOption = {
    shortFlag: string
}

type LongOption = {
    longFlag: string
}

export enum ArgumentType {
    NONE = 0,
    REQUIRED = 1,
    OPTIONAL = 2
}

type Option = (ShortOption | LongOption) & {
    /* Personal note */
    note?: string

    description?: string | string[]
} & ({ argument: ArgumentType.OPTIONAL | ArgumentType.REQUIRED, argumentPlaceholder?: string } | Partial<{ argument: ArgumentType.NONE, argumentPlaceholder: never }>)

export type OptionSet = Option[]

export function isShortOption(option: Option): option is ShortOption & Option {
    return Object.hasOwn(option, <keyof ShortOption>'shortFlag')
}

export function isLongOptions(option: Option): option is LongOption & Option {
    return Object.hasOwn(option, <keyof LongOption>'longFlag')
}