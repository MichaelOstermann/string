import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.drop(target, amount)`
 *
 * Removes the first `amount` characters from `target` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.drop("hello world", 6); // "world"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.drop(6)); // "world"
 * ```
 */
export const drop: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dfdlT((target: string, amount: number): string => {
    if (amount === 0) return target
    if (amount >= target.length) return ""
    return target.slice(amount)
}, 2)
