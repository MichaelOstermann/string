# match

```ts
function String.match(
    target: string,
    source: string | RegExp,
): RegExpMatchArray | null
```

Returns the result of matching `target` string against `source` string or regular expression, or null if no match is found.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.match("hello world", "world"); // ["world", index: 6, input: "hello world", groups: undefined]
String.match("hello world", /\d+/); // null
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.match("world")); // ["world", index: 6, input: "hello world", groups: undefined]
pipe("hello world", String.match(/\d+/)); // null
```

:::
