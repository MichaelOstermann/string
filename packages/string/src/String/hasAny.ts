import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.hasAny(target, source)`
 *
 * Checks if `target` string contains any of the strings from the `source` iterable.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.hasAny("hello world", ["foo", "world"]); // true
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.hasAny(["foo", "world"])); // true
 * ```
 */
export const hasAny: {
    (source: Iterable<string>): (target: string) => boolean
    (target: string, source: Iterable<string>): boolean
} = dfdlT((target: string, source: Iterable<string>): boolean => {
    for (const value of source) {
        if (target.includes(value)) return true
    }
    return false
}, 2)
