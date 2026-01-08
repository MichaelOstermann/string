# deburr

```ts
function String.deburr(target: string): string
```

Removes diacritical marks from `target` string and converts special characters to their ASCII equivalents.

The function normalizes the string, strips combining diacritical marks, and replaces special characters like ligatures (Æ, œ) and extended Latin characters (ø, ß, þ) with their closest ASCII representations.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.deburr("café"); // "cafe"
String.deburr("naïve résumé"); // "naive resume"
String.deburr("Æsop's Œuvres"); // "Aesop's Oeuvres"
String.deburr("Ørsted"); // "Orsted"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("café", String.deburr()); // "cafe"
pipe("naïve résumé", String.deburr()); // "naive resume"
pipe("Æsop's Œuvres", String.deburr()); // "Aesop's Oeuvres"
pipe("Ørsted", String.deburr()); // "Orsted"
```

:::
