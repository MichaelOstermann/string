import { dfdlT } from "@monstermann/dfdl"

/**
 * # take
 *
 * ```ts
 * function String.take(target: string, amount: number): string
 * ```
 *
 * Takes the first `amount` characters from `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.take("hello world", 5); // "hello"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.take(5)); // "hello"
 * ```
 *
 */
export const take: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dfdlT((target: string, amount: number): string => {
    if (amount === 0) return ""
    if (amount >= target.length) return target
    return target.slice(0, amount)
}, 2)
