import { dfdlT } from "@monstermann/dfdl"

/**
 * # startsWith
 *
 * ```ts
 * function String.startsWith(target: string, source: string): boolean
 * ```
 *
 * Checks if `target` string starts with `source` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.startsWith("hello world", "hello"); // true
 * String.startsWith("hello world", "world"); // false
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.startsWith("hello")); // true
 * pipe("hello world", String.startsWith("world")); // false
 * ```
 *
 */
export const startsWith: {
    (source: string): (target: string) => boolean
    (target: string, source: string): boolean
} = dfdlT((a: string, b: string): boolean => {
    return a.startsWith(b)
}, 2)
