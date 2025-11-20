import type { ReplaceAll } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.replaceAll(target, search, replace)`
 *
 * Replaces all occurrences of `search` string or regular expression in `target` string with `replace` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.replaceAll("hello world world", "world", "universe"); // "hello universe universe"
 * String.replaceAll("hello world", /o/g, "0"); // "hell0 w0rld"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world world", String.replaceAll("world", "universe")); // "hello universe universe"
 * pipe("hello world", String.replaceAll(/o/g, "0")); // "hell0 w0rld"
 * ```
 */
export const replaceAll: {
    <U extends string | RegExp, V extends string>(search: U, replacement: V): <T extends string>(target: T) => ReplaceAll<T, U, V>
    <T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): ReplaceAll<T, U, V>
} = dfdlT(<T extends string, U extends string | RegExp, V extends string>(target: T, search: U, replacement: V): ReplaceAll<T, U, V> => {
    return target.replaceAll(search, replacement) as ReplaceAll<T, U, V>
}, 3)
