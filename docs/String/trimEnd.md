# trimEnd

```ts
function String.trimEnd<T extends string>(target: T): TrimEnd<T>
```

Removes whitespace from the end of `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.trimEnd("  hello world  "); // "  hello world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("  hello world  ", String.trimEnd()); // "  hello world"
```

:::
