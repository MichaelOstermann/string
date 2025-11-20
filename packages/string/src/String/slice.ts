import type { Slice } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { slice as apply } from "string-ts"

/**
 * `String.slice(target, start, end?)`
 *
 * Extracts a section of `target` string from `start` index to `end` index (exclusive). If `end` is not provided, extracts to the end of the string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.slice("hello world", 0, 5); // "hello"
 * String.slice("hello world", 6, 11); // "world"
 * String.slice("hello world", 6); // "world"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.slice(0, 5)); // "hello"
 * pipe("hello world", String.slice(6, 11)); // "world"
 * pipe("hello world", String.slice(6)); // "world"
 * ```
 */
export const slice: {
    <T extends string, U extends number, V extends number | undefined = undefined>(start: U, end?: V): (target: T) => Slice<T, U, V>

    <T extends string, U extends number, V extends number | undefined = undefined>(target: T, start: U, end?: V): Slice<T, U, V>
} = dfdlT(apply, args => typeof args[0] === "string")
