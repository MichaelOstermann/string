import { dfdlT } from "@monstermann/dfdl"

/**
 * # padStart
 *
 * ```ts
 * function String.padStart(
 *     target: string,
 *     length: number,
 *     fill: string,
 * ): string
 * ```
 *
 * Pads `target` string from the start with `fill` string until the result reaches the specified `length`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.padStart("hello", 10, " "); // "     hello"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello", String.padStart(10, " ")); // "     hello"
 * ```
 *
 */
export const padStart: {
    (length: number, fill: string): (target: string) => string
    (target: string, length: number, fill: string): string
} = dfdlT((target: string, length: number, fill: string): string => {
    return target.padStart(length, fill)
}, 3)
