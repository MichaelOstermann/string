# graphemes

```ts
function String.graphemes(target: string): Generator<string>
```

Returns a generator that yields individual grapheme clusters from `target` string.

A grapheme cluster represents a single user-perceived character, which may consist of multiple Unicode code points (e.g., emojis with modifiers, base characters with combining diacriticals).

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

[...String.graphemes("hello")]; // ["h", "e", "l", "l", "o"]
[...String.graphemes("👨‍👩‍👧‍👦")]; // ["👨‍👩‍👧‍👦"]
[...String.graphemes("café")]; // ["c", "a", "f", "é"]
[...String.graphemes("👋🏽")]; // ["👋🏽"]

// Using in a loop
for (const grapheme of String.graphemes("hello👋")) {
    console.log(grapheme); // "h", "e", "l", "l", "o", "👋"
}
```

```ts [data-last]
import { String } from "@monstermann/string";

[...pipe("hello", String.graphemes())]; // ["h", "e", "l", "l", "o"]
[...pipe("👨‍👩‍👧‍👦", String.graphemes())]; // ["👨‍👩‍👧‍👦"]
[...pipe("café", String.graphemes())]; // ["c", "a", "f", "é"]
[...pipe("👋🏽", String.graphemes())]; // ["👋🏽"]

// Using in a loop
for (const grapheme of pipe("hello👋", String.graphemes())) {
    console.log(grapheme); // "h", "e", "l", "l", "o", "👋"
}
```

:::
