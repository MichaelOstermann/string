import { dfdlT } from "@monstermann/dfdl"

/**
 * # prepend
 *
 * ```ts
 * function String.prepend(
 *     target: string,
 *     source: Iterable<string>,
 * ): string
 * ```
 *
 * Prepends `string` or strings from `source` iterable to the beginning of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.prepend("world", "hello "); // "hello world"
 * String.prepend("world", ["hello", " "]); // "hello world"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("world", String.prepend("hello ")); // "hello world"
 * pipe("world", String.prepend(["hello", " "])); // "hello world"
 * ```
 *
 */
export const prepend: {
    (source: Iterable<string>): (target: string) => string
    (target: string, source: Iterable<string>): string
} = dfdlT((a: string, b: Iterable<string>): string => {
    return (typeof b === "string" ? b : Array.from(b).join("")) + a
}, 2)
