import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.lastIndexOfOrElse(target, source, orElse)`
 *
 * Returns the index of the last occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.lastIndexOfOrElse("hello world hello", "hello", () => -1); // 12
 * String.lastIndexOfOrElse("hello world", "foo", (str) => str.length); // 11
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe(
 *     "hello world hello",
 *     String.lastIndexOfOrElse("hello", () => -1),
 * ); // 12
 *
 * pipe(
 *     "hello world",
 *     String.lastIndexOfOrElse("foo", (str) => str.length),
 * ); // 11
 * ```
 */
export const lastIndexOfOrElse: {
    <T>(source: string, orElse: (target: string) => T): (target: string) => number | T
    <T>(target: string, source: string, orElse: (target: string) => T): number | T
} = dfdlT(<T>(a: string, b: string, orElse: (target: string) => T): number | T => {
    const idx = a.lastIndexOf(b)
    return Number.isFinite(idx) ? idx : orElse(a)
}, 3)
