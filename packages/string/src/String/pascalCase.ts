import type { PascalCase } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { pascalCase as apply } from "string-ts"

/**
 * # pascalCase
 *
 * ```ts
 * function String.pascalCase<T extends string>(
 *     target: T,
 * ): PascalCase<T>
 * ```
 *
 * Converts `target` string to PascalCase format.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.pascalCase("hello world"); // "HelloWorld"
 * String.pascalCase("hello-world"); // "HelloWorld"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.pascalCase()); // "HelloWorld"
 * pipe("hello-world", String.pascalCase()); // "HelloWorld"
 * ```
 *
 */
export const pascalCase: {
    (): <T extends string>(target: T) => PascalCase<T>
    <T extends string>(target: T): PascalCase<T>
} = dfdlT(<T extends string>(target: T): PascalCase<T> => {
    return apply(target)
}, 1)
