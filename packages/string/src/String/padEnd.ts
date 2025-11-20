import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.padEnd(target, length, fill)`
 *
 * Pads `target` string from the end with `fill` string until the result reaches the specified `length`.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.padEnd("hello", 10, " "); // "hello     "
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello", String.padEnd(10, " ")); // "hello     "
 * ```
 */
export const padEnd: {
    (length: number, fill: string): (target: string) => string
    (target: string, length: number, fill: string): string
} = dfdlT((target: string, length: number, fill: string): string => {
    return target.padEnd(length, fill)
}, 3)
