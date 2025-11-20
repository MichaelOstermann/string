import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.dropLast(target, amount)`
 *
 * Removes the last `amount` characters from `target` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.dropLast("hello world", 6); // "hello"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.dropLast(6)); // "hello"
 * ```
 */
export const dropLast: {
    (amount: number): (target: string) => string
    (target: string, amount: number): string
} = dfdlT((target: string, amount: number): string => {
    if (amount === 0) return target
    if (amount >= target.length) return ""
    return target.slice(0, -amount)
}, 2)
