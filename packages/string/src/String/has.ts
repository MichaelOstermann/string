import { dfdlT } from "@monstermann/dfdl"

/**
 * # has
 *
 * ```ts
 * function String.has(target: string, source: string): boolean
 * ```
 *
 * Checks if `target` string contains `source` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.has("hello world", "world"); // true
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.has("world")); // true
 * ```
 *
 */
export const has: {
    (source: string): (target: string) => boolean
    (target: string, source: string): boolean
} = dfdlT((target: string, source: string): boolean => {
    return target.includes(source)
}, 2)
