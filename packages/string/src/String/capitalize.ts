import { dfdlT } from "@monstermann/dfdl"
import { capitalize as apply } from "string-ts"

/**
 * `String.capitalize(target)`
 *
 * Capitalizes the first letter of `target` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.capitalize("hello world"); // "Hello world"
 * String.capitalize("hello"); // "Hello"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.capitalize()); // "Hello world"
 * pipe("hello", String.capitalize()); // "Hello"
 * ```
 */
export const capitalize: {
    (): <T extends string>(target: T) => Capitalize<T>
    <T extends string>(target: T): Capitalize<T>
} = dfdlT(<T extends string>(target: T): Capitalize<T> => {
    return apply(target)
}, 1)
