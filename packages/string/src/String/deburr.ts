import { dfdlT } from "@monstermann/dfdl"

const CHAR_MAP: Record<string, string> = {
    Æ: "Ae",
    æ: "ae",
    Đ: "D",
    đ: "d",
    Ð: "D",
    ð: "d",
    Ħ: "H",
    ħ: "h",
    Ĳ: "IJ",
    ĳ: "ij",
    ı: "i",
    Ł: "L",
    ł: "l",
    Ŀ: "L",
    ŀ: "l",
    Ŋ: "N",
    ŋ: "n",
    Ø: "O",
    ø: "o",
    Œ: "Oe",
    œ: "oe",
    ĸ: "k",
    ſ: "s",
    ß: "ss",
    Ŧ: "T",
    ŧ: "t",
    Þ: "Th",
    þ: "th",
    ŉ: "'n",
}

// eslint-disable-next-line regexp/prefer-character-class
const CHAR_RE = new RegExp(Object.keys(CHAR_MAP).join("|"), "g")

/**
 * # deburr
 *
 * ```ts
 * function String.deburr(target: string): string
 * ```
 *
 * Removes diacritical marks from `target` string and converts special characters to their ASCII equivalents.
 *
 * The function normalizes the string, strips combining diacritical marks, and replaces special characters like ligatures (Æ, œ) and extended Latin characters (ø, ß, þ) with their closest ASCII representations.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { String } from "@monstermann/string";
 *
 * String.deburr("café"); // "cafe"
 * String.deburr("naïve résumé"); // "naive resume"
 * String.deburr("Æsop's Œuvres"); // "Aesop's Oeuvres"
 * String.deburr("Ørsted"); // "Orsted"
 * ```
 *
 * ```ts [data-last]
 * import { String } from "@monstermann/string";
 *
 * pipe("café", String.deburr()); // "cafe"
 * pipe("naïve résumé", String.deburr()); // "naive resume"
 * pipe("Æsop's Œuvres", String.deburr()); // "Aesop's Oeuvres"
 * pipe("Ørsted", String.deburr()); // "Orsted"
 * ```
 *
 */
export const deburr: {
    (): (target: string) => string
    (target: string): string
} = dfdlT((target: string): string => {
    return target
        .normalize("NFD")
        .replace(/[\u0300-\u036F\uFE20-\uFE23]/g, "")
        .replace(CHAR_RE, char => CHAR_MAP[char] || char)
        .normalize("NFC")
}, 1)
