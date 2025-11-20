import type { TrimStart } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.trimStart(target)`
 *
 * Removes whitespace from the start of `target` string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.trimStart("  hello world  "); // "hello world  "
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("  hello world  ", String.trimStart()); // "hello world  "
 * ```
 */
export const trimStart: {
    (): <T extends string>(target: T) => TrimStart<T>
    <T extends string>(target: T): TrimStart<T>
} = dfdlT(<T extends string>(target: T): TrimStart<T> => {
    return target.trimStart() as TrimStart<T>
}, 1)
