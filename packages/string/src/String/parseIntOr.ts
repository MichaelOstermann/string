import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.parseIntOr(target, or)`
 *
 * Parses `target` string and returns an integer, or the `or` value if parsing fails.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.parseIntOr("42", 0); // 42
 * String.parseIntOr("abc", 0); // 0
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("42", String.parseIntOr(0)); // 42
 * pipe("abc", String.parseIntOr(0)); // 0
 * ```
 */
export const parseIntOr: {
    <T>(or: T): (target: string) => number | T
    <T>(target: string, or: T): number | T
} = dfdlT(<T>(target: string, or: T): number | T => {
    const value = Number.parseInt(target)
    return Number.isFinite(value) ? value : or
}, 2)
