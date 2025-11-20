import { dfdlT } from "@monstermann/dfdl"
import { toLowerCase as apply } from "string-ts"

/**
 * `String.lowerCase(target)`
 *
 * Converts `target` string to lowercase.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.lowerCase("HELLO WORLD"); // "hello world"
 * String.lowerCase("Hello World"); // "hello world"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("HELLO WORLD", String.lowerCase()); // "hello world"
 * pipe("Hello World", String.lowerCase()); // "hello world"
 * ```
 */
export const lowerCase: {
    (): <T extends string>(target: T) => Lowercase<T>
    <T extends string>(target: T): Lowercase<T>
} = dfdlT(<T extends string>(target: T): Lowercase<T> => {
    return apply(target)
}, 1)
