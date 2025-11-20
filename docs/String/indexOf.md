# indexOf

`String.indexOf(target, source)`

Returns the index of the first occurrence of `source` string in `target` string, or -1 if not found.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.indexOf("hello world", "world"); // 6
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.indexOf("world")); // 6
```

:::
