import type { CamelCase } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { camelCase as apply } from "string-ts"

/**
 * `String.camelCase(target)`
 *
 * Converts `target` string to camelCase format.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.camelCase("hello world"); // "helloWorld"
 * String.camelCase("hello-world"); // "helloWorld"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.camelCase()); // "helloWorld"
 * pipe("hello-world", String.camelCase()); // "helloWorld"
 * ```
 */
export const camelCase: {
    (): <T extends string>(target: T) => CamelCase<T>
    <T extends string>(target: T): CamelCase<T>
} = dfdlT(<T extends string>(target: T): CamelCase<T> => {
    return apply(target)
}, 1)
