import { dfdlT } from "@monstermann/dfdl"

/**
 * # append
 *
 * ```ts
 * function String.append(
 *     target: string,
 *     source: Iterable<string>,
 * ): string
 * ```
 *
 * Appends `source` or strings from `source` iterable to the end of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.append("hello", " world"); // "hello world"
 * String.append("hello", [" ", "world"]); // "hello world"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello", String.append(" world")); // "hello world"
 * pipe("hello", String.append([" ", "world"])); // "hello world"
 * ```
 *
 */
export const append: {
    (source: Iterable<string>): (target: string) => string
    (target: string, source: Iterable<string>): string
} = dfdlT((a: string, b: Iterable<string>): string => {
    return a + (typeof b === "string" ? b : Array.from(b).join(""))
}, 2)
