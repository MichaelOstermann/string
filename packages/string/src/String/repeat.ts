import type { Repeat } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # repeat
 *
 * ```ts
 * function String.repeat<T extends string, U extends number>(
 *     target: T,
 *     amount: U,
 * ): Repeat<T, U>
 * ```
 *
 * Repeats `target` string `amount` times.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.repeat("hello", 3); // "hellohellohello"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello", String.repeat(3)); // "hellohellohello"
 * ```
 *
 */
export const repeat: {
    <U extends number>(amount: U): <T extends string>(target: T) => Repeat<T, U>
    <T extends string, U extends number>(target: T, amount: U): Repeat<T, U>
} = dfdlT(<T extends string, U extends number>(target: T, amount: U): Repeat<T, U> => {
    return target.repeat(amount)
}, 2)
