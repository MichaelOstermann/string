import type { Replace } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # replace
 *
 * ```ts
 * function String.replace<
 *     T extends string,
 *     U extends string | RegExp,
 *     V extends string,
 * >(target: T, search: U, replacement: V): Replace<T, U, V>
 * ```
 *
 * Replaces the first occurrence of `search` string or regular expression in `target` string with `replace` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.replace("hello world", "world", "universe"); // "hello universe"
 * String.replace("hello world", /o/g, "0"); // "hell0 w0rld"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.replace("world", "universe")); // "hello universe"
 * pipe("hello world", String.replace(/o/g, "0")); // "hell0 w0rld"
 * ```
 *
 */
export const replace: {
    <U extends string | RegExp, V extends string>(search: U, replacement: V): <T extends string>(target: T) => Replace<T, U, V>
    <T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): Replace<T, U, V>
} = dfdlT(<T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): Replace<T, U, V> => {
    return target.replace(search, replacement) as Replace<T, U, V>
}, 3)
