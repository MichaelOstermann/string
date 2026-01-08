# repeat

```ts
function String.repeat<T extends string, U extends number>(
    target: T,
    amount: U,
): Repeat<T, U>
```

Repeats `target` string `amount` times.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.repeat("hello", 3); // "hellohellohello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello", String.repeat(3)); // "hellohellohello"
```

:::
