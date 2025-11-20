import type { Reverse } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { reverse as apply } from "string-ts"

/**
 * `String.reverse(target)`
 *
 * Reverses the characters in `target` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.reverse("hello world"); // "dlrow olleh"
 * String.reverse("abc"); // "cba"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.reverse()); // "dlrow olleh"
 * pipe("abc", String.reverse()); // "cba"
 * ```
 */
export const reverse: {
    (): <T extends string>(target: T) => Reverse<T>
    <T extends string>(target: T): Reverse<T>
} = dfdlT(<T extends string>(target: T): Reverse<T> => {
    return apply(target)
}, 1)
