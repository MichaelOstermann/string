# padEnd

`String.padEnd(target, length, fill)`

Pads `target` string from the end with `fill` string until the result reaches the specified `length`.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.padEnd("hello", 10, " "); // "hello     "
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello", String.padEnd(10, " ")); // "hello     "
```

:::
