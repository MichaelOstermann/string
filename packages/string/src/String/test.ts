import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.test(target, source)`
 *
 * Tests if `target` string matches the `source` regular expression.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.test("hello world", /world/); // true
 * String.test("hello world", /\d+/); // false
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.test(/world/)); // true
 * pipe("hello world", String.test(/\d+/)); // false
 * ```
 */
export const test: {
    (source: RegExp): (target: string) => boolean
    (target: string, source: RegExp): boolean
} = dfdlT((target: string, source: RegExp): boolean => {
    return source.test(target)
}, 2)
