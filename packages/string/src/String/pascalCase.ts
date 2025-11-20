import type { PascalCase } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { pascalCase as apply } from "string-ts"

/**
 * `String.pascalCase(target)`
 *
 * Converts `target` string to PascalCase format.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.pascalCase("hello world"); // "HelloWorld"
 * String.pascalCase("hello-world"); // "HelloWorld"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.pascalCase()); // "HelloWorld"
 * pipe("hello-world", String.pascalCase()); // "HelloWorld"
 * ```
 */
export const pascalCase: {
    (): <T extends string>(target: T) => PascalCase<T>
    <T extends string>(target: T): PascalCase<T>
} = dfdlT(<T extends string>(target: T): PascalCase<T> => {
    return apply(target)
}, 1)
