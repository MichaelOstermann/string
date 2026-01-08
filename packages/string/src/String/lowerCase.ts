import { dfdlT } from "@monstermann/dfdl"
import { toLowerCase as apply } from "string-ts"

/**
 * # lowerCase
 *
 * ```ts
 * function String.lowerCase<T extends string>(
 *     target: T,
 * ): Lowercase<T>
 * ```
 *
 * Converts `target` string to lowercase.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.lowerCase("HELLO WORLD"); // "hello world"
 * String.lowerCase("Hello World"); // "hello world"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("HELLO WORLD", String.lowerCase()); // "hello world"
 * pipe("Hello World", String.lowerCase()); // "hello world"
 * ```
 *
 */
export const lowerCase: {
    (): <T extends string>(target: T) => Lowercase<T>
    <T extends string>(target: T): Lowercase<T>
} = dfdlT(<T extends string>(target: T): Lowercase<T> => {
    return apply(target)
}, 1)
