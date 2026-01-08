import { dfdlT } from "@monstermann/dfdl"

/**
 * # hasNone
 *
 * ```ts
 * function String.hasNone(
 *     target: string,
 *     source: Iterable<string>,
 * ): boolean
 * ```
 *
 * Checks if `target` string contains none of the strings from the `source` iterable.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.hasNone("hello world", ["foo", "bar"]); // true
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.hasNone(["foo", "bar"])); // true
 * ```
 *
 */
export const hasNone: {
    (source: Iterable<string>): (target: string) => boolean
    (target: string, source: Iterable<string>): boolean
} = dfdlT((target: string, source: Iterable<string>): boolean => {
    for (const value of source) {
        if (target.includes(value)) return false
    }
    return true
}, 2)
