import type { Reverse } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { reverse as apply } from "string-ts"

/**
 * # reverse
 *
 * ```ts
 * function String.reverse<T extends string>(target: T): Reverse<T>
 * ```
 *
 * Reverses the characters in `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.reverse("hello world"); // "dlrow olleh"
 * String.reverse("abc"); // "cba"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.reverse()); // "dlrow olleh"
 * pipe("abc", String.reverse()); // "cba"
 * ```
 *
 */
export const reverse: {
    (): <T extends string>(target: T) => Reverse<T>
    <T extends string>(target: T): Reverse<T>
} = dfdlT(<T extends string>(target: T): Reverse<T> => {
    return apply(target)
}, 1)
