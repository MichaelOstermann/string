import type { TrimEnd } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.trimEnd(target)`
 *
 * Removes whitespace from the end of `target` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.trimEnd("  hello world  "); // "  hello world"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("  hello world  ", String.trimEnd()); // "  hello world"
 * ```
 */
export const trimEnd: {
    (): <T extends string>(target: T) => TrimEnd<T>
    <T extends string>(target: T): TrimEnd<T>
} = dfdlT(<T extends string>(target: T): TrimEnd<T> => {
    return target.trimEnd() as TrimEnd<T>
}, 1)
