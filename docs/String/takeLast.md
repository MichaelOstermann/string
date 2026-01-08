# takeLast

```ts
function String.takeLast(target: string, amount: number): string
```

Takes the last `amount` characters from `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.takeLast("hello world", 5); // "world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.takeLast(5)); // "world"
```

:::
