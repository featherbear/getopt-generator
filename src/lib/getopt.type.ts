export enum ArgumentType {
    NONE = 0,
    REQUIRED = 1,
    OPTIONAL = 2
}

type ShortOption = {
    shortFlag: string
}

type LongOption = {
    longFlag: string
}

type OptionInclusion = (ShortOption & { longFlag?: never })
    | (LongOption & { shortFlag?: never })
    | (ShortOption & LongOption)

type ArgumentInclusion = ({ argument: ArgumentType.OPTIONAL | ArgumentType.REQUIRED, argumentPlaceholder?: string } | Partial<{ argument: ArgumentType.NONE, argumentPlaceholder: never }>)

export type Option = {
    note?: string
    description?: string | string[]
}
    & OptionInclusion
    & ArgumentInclusion

export type OptionSet = Option[]

export const asShortOption = (option: Option) => <ShortOption & Option>option;
export const asLongOption = (option: Option) => <LongOption & Option>option;

export function isShortOption(option: Option): option is ShortOption & Option {
    return Object.hasOwn(option, <keyof ShortOption>'shortFlag') && !!option.shortFlag
}

export function isLongOptions(option: Option): option is LongOption & Option {
    return Object.hasOwn(option, <keyof LongOption>'longFlag') && !!option.longFlag
}