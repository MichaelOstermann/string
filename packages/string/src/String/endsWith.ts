import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.endsWith(target, source)`
 *
 * Checks if `target` string ends with `source` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.endsWith("hello world", "world"); // true
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.endsWith("world")); // true
 * ```
 */
export const endsWith: {
    (source: string): (target: string) => boolean
    (target: string, source: string): boolean
} = dfdlT((a: string, b: string): boolean => {
    return a.endsWith(b)
}, 2)
