# trimStart

```ts
function String.trimStart<T extends string>(
    target: T,
): TrimStart<T>
```

Removes whitespace from the start of `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.trimStart("  hello world  "); // "hello world  "
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("  hello world  ", String.trimStart()); // "hello world  "
```

:::
