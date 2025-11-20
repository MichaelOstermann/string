import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.match(target, source)`
 *
 * Returns the result of matching `target` string against `source` string or regular expression, or null if no match is found.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.match("hello world", "world"); // ["world", index: 6, input: "hello world", groups: undefined]
 * String.match("hello world", /\d+/); // null
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.match("world")); // ["world", index: 6, input: "hello world", groups: undefined]
 * pipe("hello world", String.match(/\d+/)); // null
 * ```
 */
export const match: {
    (source: string | RegExp): (target: string) => RegExpMatchArray | null
    (target: string, source: string | RegExp): RegExpMatchArray | null
} = dfdlT((target: string, source: string | RegExp): RegExpMatchArray | null => {
    return target.match(source)
}, 2)
