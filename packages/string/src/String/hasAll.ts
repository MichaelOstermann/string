import { dfdlT } from "@monstermann/dfdl"

/**
 * # hasAll
 *
 * ```ts
 * function String.hasAll(
 *     target: string,
 *     source: Iterable<string>,
 * ): boolean
 * ```
 *
 * Checks if `target` string contains all strings from the `source` iterable.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.hasAll("hello world", ["hello", "world"]); // true
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.hasAll(["hello", "world"])); // true
 * ```
 *
 */
export const hasAll: {
    (source: Iterable<string>): (target: string) => boolean
    (target: string, source: Iterable<string>): boolean
} = dfdlT((target: string, source: Iterable<string>): boolean => {
    for (const value of source) {
        if (!target.includes(value)) return false
    }
    return true
}, 2)
