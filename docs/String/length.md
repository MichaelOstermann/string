# length

`String.length(target)`

Returns the length of `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.length("hello world"); // 11
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.length()); // 11
```

:::
