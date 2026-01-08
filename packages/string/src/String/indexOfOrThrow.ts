import { dfdlT } from "@monstermann/dfdl"

/**
 * # indexOfOrThrow
 *
 * ```ts
 * function String.indexOfOrThrow(
 *     target: string,
 *     source: string,
 * ): number
 * ```
 *
 * Returns the index of the first occurrence of `source` string in `target` string, or throws an error if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.indexOfOrThrow("hello world", "world"); // 6
 * String.indexOfOrThrow("hello world", "foo"); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.indexOfOrThrow("world")); // 6
 * pipe("hello world", String.indexOfOrThrow("foo")); // throws FnError
 * ```
 *
 */
export const indexOfOrThrow: {
    (source: string): (target: string) => number
    (target: string, source: string): number
} = dfdlT((a: string, b: string): number => {
    const idx = a.indexOf(b)
    if (Number.isFinite(idx)) return idx
    throw new Error("String.indexOfOrThrow: Value not found.")
}, 2)
