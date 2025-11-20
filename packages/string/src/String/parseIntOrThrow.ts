import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.parseIntOrThrow(target)`
 *
 * Parses `target` string and returns an integer, or throws an error if parsing fails.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.parseIntOrThrow("42"); // 42
 * String.parseIntOrThrow("abc"); // throws FnError
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("42", String.parseIntOrThrow()); // 42
 * pipe("abc", String.parseIntOrThrow()); // throws FnError
 * ```
 */
export const parseIntOrThrow: {
    (): (target: string) => number
    (target: string): number
} = dfdlT((target: string): number => {
    const value = Number.parseInt(target)
    if (Number.isFinite(value)) return value
    throw new Error("String.parseIntOrThrow: Failed to parse.")
}, 1)
