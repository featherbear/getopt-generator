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
                    suffix = ":"
                    break;
                case ArgumentType.REQUIRED:
                    suffix = "::"
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
export const generateLong = (options: OptionSet) => options.
    filter(isLongOptions).
    reduce(
        (prev, option) => {
            throw new Error("Not implemented")
        }, "")

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
function generateHelpText(options: OptionSet, generatorOptions?: Partial<HelpTextGeneratorOptions>): string | string[] {
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
            let space = lines[0].length + 3
            lines[0] += ' - ' + description[0]

            description.slice(1).forEach(s => lines.push(Array(space + 1).join(" ") + s))
        }

        return lines.map(s => (generatorOptions?.linePrefix ?? "") + s)
    })

    return generatorOptions?.outputAsArray ? result : result.join(generatorOptions?.lineSeparator ?? "\n")
}

export function withOptions(options: OptionSet) {
    return {
        generateShort: () => generateShort(options),
        generateLong: () => generateLong(options),
        generateHelpText: (generatorOptions?: Parameters<typeof generateHelpText>[1]) => generateHelpText(options, generatorOptions),
        get data() { return options },
    }
}
