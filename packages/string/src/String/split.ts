import type { Split } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # split
 *
 * ```ts
 * function String.split<T extends string, U extends RegExp>(
 *     target: T,
 *     delimiter: U,
 * ): string[]
 * ```
 *
 * Splits `target` string into an array of substrings using `source` string or regular expression as the separator.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.split("hello,world,test", ","); // ["hello", "world", "test"]
 * String.split("hello world", /\s+/); // ["hello", "world"]
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello,world,test", String.split(",")); // ["hello", "world", "test"]
 * pipe("hello world", String.split(/\s+/)); // ["hello", "world"]
 * ```
 *
 */
export const split: {
    <U extends string>(delimiter: U): <T extends string>(target: T) => Split<T, U>
    <U extends RegExp>(delimiter: U): <T extends string>(target: T) => string[]
    <T extends string, U extends string>(target: T, delimiter: U): Split<T, U>
    <T extends string, U extends RegExp>(target: T, delimiter: U): string[]
} = dfdlT(<T extends string, U extends string | RegExp>(target: T, delimiter: U): string[] => {
    return target.split(delimiter)
}, 2)
