# endsWith

```ts
function String.endsWith(target: string, source: string): boolean
```

Checks if `target` string ends with `source` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.endsWith("hello world", "world"); // true
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.endsWith("world")); // true
```

:::
