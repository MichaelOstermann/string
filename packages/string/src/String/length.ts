import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.length(target)`
 *
 * Returns the length of `target` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.length("hello world"); // 11
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.length()); // 11
 * ```
 */
export const length: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    return target.length
}, 1)
