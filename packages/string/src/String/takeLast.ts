import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.takeLast(target, amount)`
 *
 * Takes the last `amount` characters from `target` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.takeLast("hello world", 5); // "world"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.takeLast(5)); // "world"
 * ```
 */
export const takeLast: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dfdlT((target: string, amount: number): string => {
    if (amount === 0) return ""
    if (amount >= target.length) return target
    return target.slice(-amount)
}, 2)
