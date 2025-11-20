# has

`String.has(target, source)`

Checks if `target` string contains `source` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.has("hello world", "world"); // true
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.has("world")); // true
```

:::
