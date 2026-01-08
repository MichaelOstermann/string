import { dfdlT } from "@monstermann/dfdl"

/**
 * # padEnd
 *
 * ```ts
 * function String.padEnd(
 *     target: string,
 *     length: number,
 *     fill: string,
 * ): string
 * ```
 *
 * Pads `target` string from the end with `fill` string until the result reaches the specified `length`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.padEnd("hello", 10, " "); // "hello     "
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello", String.padEnd(10, " ")); // "hello     "
 * ```
 *
 */
export const padEnd: {
    (length: number, fill: string): (target: string) => string
    (target: string, length: number, fill: string): string
} = dfdlT((target: string, length: number, fill: string): string => {
    return target.padEnd(length, fill)
}, 3)
