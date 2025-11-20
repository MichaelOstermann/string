import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.lastIndexOf(target, source)`
 *
 * Returns the index of the last occurrence of `source` string in `target` string, or -1 if not found.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.lastIndexOf("hello world hello", "hello"); // 12
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world hello", String.lastIndexOf("hello")); // 12
 * ```
 */
export const lastIndexOf: {
    (source: string): (target: string) => number
    (target: string, source: string): number
} = dfdlT((a: string, b: string): number => {
    return a.lastIndexOf(b)
}, 2)
