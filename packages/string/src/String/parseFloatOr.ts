import { dfdlT } from "@monstermann/dfdl"

/**
 * # parseFloatOr
 *
 * ```ts
 * function String.parseFloatOr<T>(target: string, or: T): number | T
 * ```
 *
 * Parses `target` string and returns a floating point number, or the `or` value if parsing fails.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.parseFloatOr("3.14", 0); // 3.14
 * String.parseFloatOr("abc", 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("3.14", String.parseFloatOr(0)); // 3.14
 * pipe("abc", String.parseFloatOr(0)); // 0
 * ```
 *
 */
export const parseFloatOr: {
    <T>(or: T): (target: string) => number | T
    <T>(target: string, or: T): number | T
} = dfdlT(<T>(target: string, or: T): number | T => {
    const value = Number.parseFloat(target)
    return Number.isFinite(value) ? value : or
}, 2)
