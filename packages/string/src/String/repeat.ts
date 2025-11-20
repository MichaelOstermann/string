import type { Repeat } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.repeat(target, amount)`
 *
 * Repeats `target` string `amount` times.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.repeat("hello", 3); // "hellohellohello"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello", String.repeat(3)); // "hellohellohello"
 * ```
 */
export const repeat: {
    <U extends number>(amount: U): <T extends string>(target: T) => Repeat<T, U>
    <T extends string, U extends number>(target: T, amount: U): Repeat<T, U>
} = dfdlT(<T extends string, U extends number>(target: T, amount: U): Repeat<T, U> => {
    return target.repeat(amount)
}, 2)
