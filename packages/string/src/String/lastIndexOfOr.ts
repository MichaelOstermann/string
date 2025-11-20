import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.lastIndexOfOr(target, source, or)`
 *
 * Returns the index of the last occurrence of `source` string in `target` string, or the `or` value if not found.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.lastIndexOfOr("hello world hello", "hello", -1); // 12
 * String.lastIndexOfOr("hello world", "foo", -1); // -1
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world hello", String.lastIndexOfOr("hello", -1)); // 12
 * pipe("hello world", String.lastIndexOfOr("foo", -1)); // -1
 * ```
 */
export const lastIndexOfOr: {
    <T>(source: string, or: T): (target: string) => number | T
    <T>(target: string, source: string, or: T): number | T
} = dfdlT(<T>(a: string, b: string, or: T): number | T => {
    const idx = a.lastIndexOf(b)
    return Number.isFinite(idx) ? idx : or
}, 3)
