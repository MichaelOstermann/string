import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.has(target, source)`
 *
 * Checks if `target` string contains `source` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.has("hello world", "world"); // true
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.has("world")); // true
 * ```
 */
export const has: {
    (source: string): (target: string) => boolean
    (target: string, source: string): boolean
} = dfdlT((target: string, source: string): boolean => {
    return target.includes(source)
}, 2)
