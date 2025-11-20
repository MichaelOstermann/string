import type { SnakeCase } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { snakeCase as apply } from "string-ts"

/**
 * `String.snakeCase(target)`
 *
 * Converts `target` string to snake_case format.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.snakeCase("hello world"); // "hello_world"
 * String.snakeCase("helloWorld"); // "hello_world"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.snakeCase()); // "hello_world"
 * pipe("helloWorld", String.snakeCase()); // "hello_world"
 * ```
 */
export const snakeCase: {
    (): <T extends string>(target: T) => SnakeCase<T>
    <T extends string>(target: T): SnakeCase<T>
} = dfdlT(<T extends string>(target: T): SnakeCase<T> => {
    return apply(target)
}, 1)
