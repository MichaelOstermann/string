import { dfdlT } from "@monstermann/dfdl"
import { deburr } from "./deburr"

const NON_ALPHANUMERIC = /[^a-z0-9\s-]/g
const SEPARATORS = /[\s_/]+/g
const CLEANUP_HYPHENS = /^-+|-+$|(-)+/g

/**
 * # slugify
 *
 * ```ts
 * function String.slugify(target: string): string
 * ```
 *
 * Converts `target` string to a URL-friendly slug format.
 *
 * The function removes diacritical marks, converts to lowercase, replaces whitespace and separators with hyphens, removes non-alphanumeric characters, and cleans up multiple or leading/trailing hyphens.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.slugify("Hello World"); // "hello-world"
 * String.slugify("Café au Lait"); // "cafe-au-lait"
 * String.slugify("  Multiple   Spaces  "); // "multiple-spaces"
 * String.slugify("Special!@#Characters"); // "specialcharacters"
 * String.slugify("foo_bar/baz"); // "foo-bar-baz"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("Hello World", String.slugify()); // "hello-world"
 * pipe("Café au Lait", String.slugify()); // "cafe-au-lait"
 * pipe("  Multiple   Spaces  ", String.slugify()); // "multiple-spaces"
 * pipe("Special!@#Characters", String.slugify()); // "specialcharacters"
 * pipe("foo_bar/baz", String.slugify()); // "foo-bar-baz"
 * ```
 *
 */
export const slugify: {
    (): (target: string) => string
    (target: string): string
} = dfdlT((target: string): string => {
    return deburr(target)
        .toLowerCase()
        .replace(SEPARATORS, "-")
        .replace(NON_ALPHANUMERIC, "")
        .replace(CLEANUP_HYPHENS, "$1")
}, 1)
