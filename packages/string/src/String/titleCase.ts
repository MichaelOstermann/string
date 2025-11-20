import type { TitleCase } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { titleCase as apply } from "string-ts"

/**
 * `String.titleCase(target)`
 *
 * Converts `target` string to Title Case format.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.titleCase("hello world"); // "Hello World"
 * String.titleCase("hello-world"); // "Hello World"
 * ```
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.titleCase()); // "Hello World"
 * pipe("hello-world", String.titleCase()); // "Hello World"
 * ```
 */
export const titleCase: {
    (): <T extends string>(target: T) => TitleCase<T>
    <T extends string>(target: T): TitleCase<T>
} = dfdlT(<T extends string>(target: T): TitleCase<T> => {
    return apply(target)
}, 1)
