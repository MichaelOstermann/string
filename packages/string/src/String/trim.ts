import type { Trim } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # trim
 *
 * ```ts
 * function String.trim<T extends string>(target: T): Trim<T>
 * ```
 *
 * Removes whitespace from both ends of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.trim("  hello world  "); // "hello world"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("  hello world  ", String.trim()); // "hello world"
 * ```
 *
 */
export const trim: {
    (): <T extends string>(target: T) => Trim<T>
    <T extends string>(target: T): Trim<T>
} = dfdlT(<T extends string>(target: T): Trim<T> => {
    return target.trim() as Trim<T>
}, 1)
