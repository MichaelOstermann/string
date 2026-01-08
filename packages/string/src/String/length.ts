import { dfdlT } from "@monstermann/dfdl"

/**
 * # length
 *
 * ```ts
 * function String.length(target: string): number
 * ```
 *
 * Returns the length of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.length("hello world"); // 11
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.length()); // 11
 * ```
 *
 */
export const length: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    return target.length
}, 1)
