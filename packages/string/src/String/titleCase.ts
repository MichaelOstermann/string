import type { TitleCase } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { titleCase as apply } from "string-ts"

/**
 * # titleCase
 *
 * ```ts
 * function String.titleCase<T extends string>(
 *     target: T,
 * ): TitleCase<T>
 * ```
 *
 * Converts `target` string to Title Case format.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.titleCase("hello world"); // "Hello World"
 * String.titleCase("hello-world"); // "Hello World"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("hello world", String.titleCase()); // "Hello World"
 * pipe("hello-world", String.titleCase()); // "Hello World"
 * ```
 *
 */
export const titleCase: {
    (): <T extends string>(target: T) => TitleCase<T>
    <T extends string>(target: T): TitleCase<T>
} = dfdlT(<T extends string>(target: T): TitleCase<T> => {
    return apply(target)
}, 1)
