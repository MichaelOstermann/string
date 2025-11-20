import { dfdlT } from "@monstermann/dfdl"
import { uncapitalize as apply } from "string-ts"

/**
 * `String.uncapitalize(target)`
 *
 * Uncapitalizes the first letter of `target` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.uncapitalize("Hello World"); // "hello World"
 * String.uncapitalize("Hello"); // "hello"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("Hello World", String.uncapitalize()); // "hello World"
 * pipe("Hello", String.uncapitalize()); // "hello"
 * ```
 */
export const uncapitalize: {
    (): <T extends string>(target: T) => Uncapitalize<T>
    <T extends string>(target: T): Uncapitalize<T>
} = dfdlT(<T extends string>(target: T): Uncapitalize<T> => {
    return apply(target)
}, 1)
