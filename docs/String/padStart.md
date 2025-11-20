# padStart

`String.padStart(target, length, fill)`

Pads `target` string from the start with `fill` string until the result reaches the specified `length`.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.padStart("hello", 10, " "); // "     hello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello", String.padStart(10, " ")); // "     hello"
```

:::
