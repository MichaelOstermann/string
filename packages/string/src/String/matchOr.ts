import { dfdlT } from "@monstermann/dfdl"

/**
 * # matchOr
 *
 * ```ts
 * function String.matchOr<T>(
 *     target: string,
 *     source: string | RegExp,
 *     or: T,
 * ): RegExpMatchArray | T
 * ```
 *
 * Returns the result of matching `target` string against `source` string or regular expression, or the `or` value if no match is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.matchOr("hello world", "world", []); // ["world", index: 6, input: "hello world", groups: undefined]
 * String.matchOr("hello world", /\d+/, []); // []
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.matchOr("world", [])); // ["world", index: 6, input: "hello world", groups: undefined]
 * pipe("hello world", String.matchOr(/\d+/, [])); // []
 * ```
 *
 */
export const matchOr: {
    <T>(source: string | RegExp, or: T): (target: string) => RegExpMatchArray | T
    <T>(target: string, source: string | RegExp, or: T): RegExpMatchArray | T
} = dfdlT(<T>(target: string, source: string | RegExp, or: T): RegExpMatchArray | T => {
    return target.match(source) ?? or
}, 3)
