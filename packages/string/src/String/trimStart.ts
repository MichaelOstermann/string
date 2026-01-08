import type { TrimStart } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # trimStart
 *
 * ```ts
 * function String.trimStart<T extends string>(
 *     target: T,
 * ): TrimStart<T>
 * ```
 *
 * Removes whitespace from the start of `target` string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.trimStart("  hello world  "); // "hello world  "
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("  hello world  ", String.trimStart()); // "hello world  "
 * ```
 *
 */
export const trimStart: {
    (): <T extends string>(target: T) => TrimStart<T>
    <T extends string>(target: T): TrimStart<T>
} = dfdlT(<T extends string>(target: T): TrimStart<T> => {
    return target.trimStart() as TrimStart<T>
}, 1)
