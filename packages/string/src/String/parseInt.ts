import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.parseInt(target)`
 *
 * Parses `target` string and returns an integer.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.parseInt("42"); // 42
 * String.parseInt("42.5"); // 42
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("42", String.parseInt()); // 42
 * pipe("42.5", String.parseInt()); // 42
 * ```
 */
export const parseInt: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    return Number.parseInt(target)
}, 1)
