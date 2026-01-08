import { dfdlT } from "@monstermann/dfdl"

/**
 * # parseFloat
 *
 * ```ts
 * function String.parseFloat(target: string): number
 * ```
 *
 * Parses `target` string and returns a floating point number.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.parseFloat("3.14"); // 3.14
 * String.parseFloat("42.5abc"); // 42.5
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("3.14", String.parseFloat()); // 3.14
 * pipe("42.5abc", String.parseFloat()); // 42.5
 * ```
 *
 */
export const parseFloat: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    return Number.parseFloat(target)
}, 1)
