# startsWith

```ts
function String.startsWith(target: string, source: string): boolean
```

Checks if `target` string starts with `source` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.startsWith("hello world", "hello"); // true
String.startsWith("hello world", "world"); // false
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.startsWith("hello")); // true
pipe("hello world", String.startsWith("world")); // false
```

:::
