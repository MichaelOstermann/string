# dropLast

`String.dropLast(target, amount)`

Removes the last `amount` characters from `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.dropLast("hello world", 6); // "hello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.dropLast(6)); // "hello"
```

:::
