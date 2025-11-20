# lastIndexOf

`String.lastIndexOf(target, source)`

Returns the index of the last occurrence of `source` string in `target` string, or -1 if not found.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.lastIndexOf("hello world hello", "hello"); // 12
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world hello", String.lastIndexOf("hello")); // 12
```

:::
