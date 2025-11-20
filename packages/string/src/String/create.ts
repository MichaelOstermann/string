/**
 * `String.create(target)`
 *
 * An alias for `String(target)`.
 *
 * ## Example
 *
 * ```ts
 * import { String } from "@monstermann/string";
 *
 * String.create(10); // "10"
 * ```
 */
export function create(value?: any): string {
    return globalThis.String(value)
}
