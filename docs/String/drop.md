# drop

```ts
function String.drop(target: string, amount: number): string
```

Removes the first `amount` characters from `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.drop("hello world", 6); // "world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.drop(6)); // "world"
```

:::
