import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.padStart(target, length, fill)`
 *
 * Pads `target` string from the start with `fill` string until the result reaches the specified `length`.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.padStart("hello", 10, " "); // "     hello"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello", String.padStart(10, " ")); // "     hello"
 * ```
 */
export const padStart: {
    (length: number, fill: string): (target: string) => string
    (target: string, length: number, fill: string): string
} = dfdlT((target: string, length: number, fill: string): string => {
    return target.padStart(length, fill)
}, 3)
