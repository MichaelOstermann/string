import { dfdlT } from "@monstermann/dfdl"

/**
 * # parseIntOrElse
 *
 * ```ts
 * function String.parseIntOrElse<T>(
 *     target: string,
 *     orElse: (target: string) => T,
 * ): number | T
 * ```
 *
 * Parses `target` string and returns an integer, or the result of calling `orElse` function with `target` if parsing fails.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.parseIntOrElse("42", () => 0); // 42
 * String.parseIntOrElse("abc", (str) => str.length); // 3
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe(
 *     "42",
 *     String.parseIntOrElse(() => 0),
 * ); // 42
 *
 * pipe(
 *     "abc",
 *     String.parseIntOrElse((str) => str.length),
 * ); // 3
 * ```
 *
 */
export const parseIntOrElse: {
    <T>(orElse: (target: string) => T): (target: string) => number | T
    <T>(target: string, orElse: (target: string) => T): number | T
} = dfdlT(<T>(target: string, orElse: (target: string) => T): number | T => {
    const value = Number.parseInt(target)
    return Number.isFinite(value) ? value : orElse(target)
}, 2)
