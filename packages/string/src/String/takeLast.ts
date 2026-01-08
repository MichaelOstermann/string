import { dfdlT } from "@monstermann/dfdl"

/**
 * # takeLast
 *
 * ```ts
 * function String.takeLast(target: string, amount: number): string
 * ```
 *
 * Takes the last `amount` characters from `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.takeLast("hello world", 5); // "world"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.takeLast(5)); // "world"
 * ```
 *
 */
export const takeLast: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dfdlT((target: string, amount: number): string => {
    if (amount === 0) return ""
    if (amount >= target.length) return target
    return target.slice(-amount)
}, 2)
