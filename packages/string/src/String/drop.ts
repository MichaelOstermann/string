import { dfdlT } from "@monstermann/dfdl"

/**
 * # drop
 *
 * ```ts
 * function String.drop(target: string, amount: number): string
 * ```
 *
 * Removes the first `amount` characters from `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.drop("hello world", 6); // "world"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.drop(6)); // "world"
 * ```
 *
 */
export const drop: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dfdlT((target: string, amount: number): string => {
    if (amount === 0) return target
    if (amount >= target.length) return ""
    return target.slice(amount)
}, 2)
