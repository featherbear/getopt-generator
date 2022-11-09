import { writable } from "svelte/store";
import { ArgumentType, isLongOptions, isShortOption, type OptionSet } from "./getopt.type";

export default writable<OptionSet>([])


/**
 * Generate a optstring (short option string)
 * 
 * @param options 
 * @returns 
 */
export const generateShort = (options: OptionSet) => options.
    filter(isShortOption).
    reduce(
        (prev, option) => {
            let suffix = ""
            switch (option.argument) {
                case ArgumentType.OPTIONAL:
                    suffix = "::"
                    break;
                case ArgumentType.REQUIRED:
                    suffix = ":"
                    break
                default:
                    break
            }

            return prev + option.shortFlag + suffix
        }, "")


/**
 * 
 * Generate a longopts struct array
 * @param options 
 * @returns 
 */
export const generateLong = (options: OptionSet) => {
    type ArgumentString = "no_argument" | "optional_argument" | "required_argument"

    let structEntries = options.filter(isLongOptions).map(option => {
        let argumentStr: ArgumentString = 'no_argument'
        switch (option.argument) {
            case ArgumentType.OPTIONAL:
                argumentStr = 'optional_argument'
                break
            case ArgumentType.REQUIRED:
                argumentStr = 'required_argument'
                break
            default:
                break
        }

        return `{"${option.longFlag}", ${argumentStr}, 0, ${option.shortFlag ? `'${option.shortFlag}'` : 0}}`
    }).concat("{ 0, 0, 0, 0 }")

    return [
        "{",
        structEntries.map(s => "\t" + s).join(",\n"),
        "}"
    ].join("\n")
}

export type HelpTextGeneratorOptions = {
    linePrefix: string
} & ({
    lineSeparator: string
    outputAsArray?: never | false
} | {
    lineSeparator?: never
    outputAsArray: true
})

function generateHelpText(options: OptionSet, generatorOptions?: Partial<HelpTextGeneratorOptions> & { outputAsArray: true }): string[]
function generateHelpText(options: OptionSet, generatorOptions?: Partial<HelpTextGeneratorOptions>): string
function generateHelpText(options: OptionSet, generatorOptions?: Partial<HelpTextGeneratorOptions>) {
    let result = options.flatMap((option) => {

        let description = option.description ? (typeof option.description === 'string' ? [option.description] : option.description) : []

        let lines: string[] = []

        let flags: string[] = []
        if (isShortOption(option)) flags.push("-" + option.shortFlag)
        if (isLongOptions(option)) flags.push("--" + option.longFlag)
        let flagString = flags.map(s => {
            let argString = ""
            switch (option.argument) {
                case ArgumentType.OPTIONAL:
                    argString = ` [${option.argumentPlaceholder || "..."}]`
                    break;
                case ArgumentType.REQUIRED:
                    argString = ` ${option.argumentPlaceholder || "..."}`
                    break
                default:
                    break;
            }
            return s + argString
        }).join(", ")

        lines.push(flagString)

        if (description.length > 0) {
            lines[0] += ' - '
            let space = lines[0].length

            lines[0] += description[0]
            description.slice(1).forEach(s => lines.push(Array(space + 1).join(" ") + s))
        }

        return lines.map(s => (generatorOptions?.linePrefix ?? "") + s)
    })

    return generatorOptions?.outputAsArray ? result : result.join(generatorOptions?.lineSeparator ?? "\n")
}


export function withOptions(options: OptionSet) {

    interface _internal_HelpTextOverload {
        (param?: Partial<HelpTextGeneratorOptions> & { outputAsArray: true }): string[]
        (param?: Partial<HelpTextGeneratorOptions>): string
    }

    return {
        generateShort: () => generateShort(options),
        generateLong: () => generateLong(options),
        generateHelpText: <_internal_HelpTextOverload>((generatorOptions) => generateHelpText(options, generatorOptions)),
        get data() { return options },
    }
}
