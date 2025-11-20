import { dfdlT } from "@monstermann/dfdl"

/**
 * `String.is(target)`
 *
 * Checks if `target` is a string.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.is("hello"); // true
 * String.is(123); // false
 * String.is(null); // false
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello", String.is()); // true
 * pipe(123, String.is()); // false
 * pipe(null, String.is()); // false
 * ```
 */
export const is: {
    (): (target: unknown) => target is string
    (target: unknown): target is string
} = dfdlT((target: unknown): target is string => {
    return typeof target === "string"
}, 1)
