import { dfdlT } from "@monstermann/dfdl"

/**
 * # parseFloatOrThrow
 *
 * ```ts
 * function String.parseFloatOrThrow(target: string): number
 * ```
 *
 * Parses `target` string and returns a floating point number, or throws an error if parsing fails.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.parseFloatOrThrow("3.14"); // 3.14
 * String.parseFloatOrThrow("abc"); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("3.14", String.parseFloatOrThrow()); // 3.14
 * pipe("abc", String.parseFloatOrThrow()); // throws FnError
 * ```
 *
 */
export const parseFloatOrThrow: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    const value = Number.parseFloat(target)
    if (Number.isFinite(value)) return value
    throw new Error("String.parseFloatOrThrow: Failed to parse.")
}, 1)
