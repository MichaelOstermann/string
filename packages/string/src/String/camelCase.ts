import type { CamelCase } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { camelCase as apply } from "string-ts"

/**
 * # camelCase
 *
 * ```ts
 * function String.camelCase<T extends string>(
 *     target: T,
 * ): CamelCase<T>
 * ```
 *
 * Converts `target` string to camelCase format.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.camelCase("hello world"); // "helloWorld"
 * String.camelCase("hello-world"); // "helloWorld"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.camelCase()); // "helloWorld"
 * pipe("hello-world", String.camelCase()); // "helloWorld"
 * ```
 *
 */
export const camelCase: {
    (): <T extends string>(target: T) => CamelCase<T>
    <T extends string>(target: T): CamelCase<T>
} = dfdlT(<T extends string>(target: T): CamelCase<T> => {
    return apply(target)
}, 1)
