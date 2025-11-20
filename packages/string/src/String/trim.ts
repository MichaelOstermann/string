import type { Trim } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.trim(target)`
 *
 * Removes whitespace from both ends of `target` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.trim("  hello world  "); // "hello world"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("  hello world  ", String.trim()); // "hello world"
 * ```
 */
export const trim: {
    (): <T extends string>(target: T) => Trim<T>
    <T extends string>(target: T): Trim<T>
} = dfdlT(<T extends string>(target: T): Trim<T> => {
    return target.trim() as Trim<T>
}, 1)
