# trim

`String.trim(target)`

Removes whitespace from both ends of `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.trim("  hello world  "); // "hello world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("  hello world  ", String.trim()); // "hello world"
```

:::
