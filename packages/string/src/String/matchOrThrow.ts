import { dfdlT } from "@monstermann/dfdl"

/**
 * # matchOrThrow
 *
 * ```ts
 * function String.matchOrThrow(
 *     target: string,
 *     source: string | RegExp,
 * ): RegExpMatchArray
 * ```
 *
 * Returns the result of matching `target` string against `source` string or regular expression, or throws an error if no match is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.matchOrThrow("hello world", "world"); // ["world", index: 6, input: "hello world", groups: undefined]
 * String.matchOrThrow("hello world", /\d+/); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.matchOrThrow("world")); // ["world", index: 6, input: "hello world", groups: undefined]
 * pipe("hello world", String.matchOrThrow(/\d+/)); // throws FnError
 * ```
 *
 */
export const matchOrThrow: {
    (source: string | RegExp): (target: string) => RegExpMatchArray
    (target: string, source: string | RegExp): RegExpMatchArray
} = dfdlT((target: string, source: string | RegExp): RegExpMatchArray => {
    const match = target.match(source)
    if (match) return match
    throw new Error("String.matchOrThrow: Value did not match.")
}, 2)
