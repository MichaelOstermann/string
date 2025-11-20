import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.isEmpty(target)`
 *
 * Checks if `target` string is empty.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.isEmpty(""); // true
 * String.isEmpty("hello"); // false
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("", String.isEmpty()); // true
 * pipe("hello", String.isEmpty()); // false
 * ```
 */
export const isEmpty: {
    (): (target: string) => boolean
    (target: string): boolean
} = dfdlT((target: string): boolean => {
    return target === ""
}, 1)
