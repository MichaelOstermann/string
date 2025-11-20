# hasNone

`String.hasNone(target, source)`

Checks if `target` string contains none of the strings from the `source` iterable.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.hasNone("hello world", ["foo", "bar"]); // true
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.hasNone(["foo", "bar"])); // true
```

:::
