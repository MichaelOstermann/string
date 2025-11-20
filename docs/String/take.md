# take

`String.take(target, amount)`

Takes the first `amount` characters from `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.take("hello world", 5); // "hello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.take(5)); // "hello"
```

:::
