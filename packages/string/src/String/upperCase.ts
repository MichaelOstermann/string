import { dfdlT } from "@monstermann/dfdl"
import { toUpperCase as apply } from "string-ts"

/**
 * `String.upperCase(target)`
 *
 * Converts `target` string to uppercase.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.upperCase("hello world"); // "HELLO WORLD"
 * String.upperCase("Hello World"); // "HELLO WORLD"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.upperCase()); // "HELLO WORLD"
 * pipe("Hello World", String.upperCase()); // "HELLO WORLD"
 * ```
 */
export const upperCase: {
    (): <T extends string>(target: T) => Uppercase<T>
    <T extends string>(target: T): Uppercase<T>
} = dfdlT(<T extends string>(target: T): Uppercase<T> => {
    return apply(target)
}, 1)
