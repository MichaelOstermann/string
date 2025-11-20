import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.prepend(target, source)`
 *
 * Prepends `string` or strings from `source` iterable to the beginning of `target` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.prepend("world", "hello "); // "hello world"
 * String.prepend("world", ["hello", " "]); // "hello world"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("world", String.prepend("hello ")); // "hello world"
 * pipe("world", String.prepend(["hello", " "])); // "hello world"
 * ```
 */
export const prepend: {
    (source: Iterable<string>): (target: string) => string
    (target: string, source: Iterable<string>): string
} = dfdlT((a: string, b: Iterable<string>): string => {
    return (typeof b === "string" ? b : Array.from(b).join("")) + a
}, 2)
