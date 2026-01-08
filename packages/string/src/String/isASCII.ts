import { dfdlT } from "@monstermann/dfdl"

/**
 * # isASCII
 *
 * ```ts
 * function String.isASCII(target: string): boolean
 * ```
 *
 * Checks if `target` string contains only ASCII characters (U+0000 to U+007F).
 *
 * Returns `true` if all characters in the string are within the ASCII range, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.isASCII("hello world"); // true
 * String.isASCII("café"); // false
 * String.isASCII("123!@#"); // true
 * String.isASCII("hello 🌍"); // false
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.isASCII()); // true
 * pipe("café", String.isASCII()); // false
 * pipe("123!@#", String.isASCII()); // true
 * pipe("hello 🌍", String.isASCII()); // false
 * ```
 *
 */
export const isASCII: {
    (): (target: string) => boolean
    (target: string): boolean
} = dfdlT((target: string): boolean => {
    // eslint-disable-next-line no-control-regex
    return !/[^\x00-\x7F]/.test(target)
}, 1)
