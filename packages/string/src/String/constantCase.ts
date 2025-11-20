import type { ConstantCase } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { constantCase as apply } from "string-ts"

/**
 * `String.constantCase(target)`
 *
 * Converts `target` string to CONSTANT_CASE format.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.constantCase("hello world"); // "HELLO_WORLD"
 * String.constantCase("helloWorld"); // "HELLO_WORLD"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.constantCase()); // "HELLO_WORLD"
 * pipe("helloWorld", String.constantCase()); // "HELLO_WORLD"
 * ```
 */
export const constantCase: {
    (): <T extends string>(target: T) => ConstantCase<T>
    <T extends string>(target: T): ConstantCase<T>
} = dfdlT(<T extends string>(target: T): ConstantCase<T> => {
    return apply(target)
}, 1)
