import { dfdlT } from "@monstermann/dfdl"

/**
 * # test
 *
 * ```ts
 * function String.test(target: string, source: RegExp): boolean
 * ```
 *
 * Tests if `target` string matches the `source` regular expression.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.test("hello world", /world/); // true
 * String.test("hello world", /\d+/); // false
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.test(/world/)); // true
 * pipe("hello world", String.test(/\d+/)); // false
 * ```
 *
 */
export const test: {
    (source: RegExp): (target: string) => boolean
    (target: string, source: RegExp): boolean
} = dfdlT((target: string, source: RegExp): boolean => {
    return source.test(target)
}, 2)
