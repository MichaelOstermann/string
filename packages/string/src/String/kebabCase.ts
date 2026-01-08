import type { KebabCase } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { kebabCase as apply } from "string-ts"

/**
 * # kebabCase
 *
 * ```ts
 * function String.kebabCase<T extends string>(
 *     target: T,
 * ): KebabCase<T>
 * ```
 *
 * Converts `target` string to kebab-case format.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.kebabCase("hello world"); // "hello-world"
 * String.kebabCase("helloWorld"); // "hello-world"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.kebabCase()); // "hello-world"
 * pipe("helloWorld", String.kebabCase()); // "hello-world"
 * ```
 *
 */
export const kebabCase: {
    (): <T extends string>(target: T) => KebabCase<T>
    <T extends string>(target: T): KebabCase<T>
} = dfdlT(<T extends string>(target: T): KebabCase<T> => {
    return apply(target)
}, 1)
