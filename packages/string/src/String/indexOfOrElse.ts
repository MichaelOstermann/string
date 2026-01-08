import { dfdlT } from "@monstermann/dfdl"

/**
 * # indexOfOrElse
 *
 * ```ts
 * function String.indexOfOrElse<T>(
 *     target: string,
 *     source: string,
 *     orElse: (target: string) => T,
 * ): number | T
 * ```
 *
 * Returns the index of the first occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.indexOfOrElse("hello world", "world", () => -1); // 6
 * String.indexOfOrElse("hello world", "foo", (str) => str.length); // 11
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe(
 *     "hello world",
 *     String.indexOfOrElse("world", () => -1),
 * ); // 6
 *
 * pipe(
 *     "hello world",
 *     String.indexOfOrElse("foo", (str) => str.length),
 * ); // 11
 * ```
 *
 */
export const indexOfOrElse: {
    <T>(source: string, orElse: (target: string) => T): (target: string) => number | T
    <T>(target: string, source: string, orElse: (target: string) => T): number | T
} = dfdlT(<T>(a: string, b: string, orElse: (target: string) => T): number | T => {
    const idx = a.indexOf(b)
    return Number.isFinite(idx) ? idx : orElse(a)
}, 3)
