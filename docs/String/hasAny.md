# hasAny

`String.hasAny(target, source)`

Checks if `target` string contains any of the strings from the `source` iterable.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.hasAny("hello world", ["foo", "world"]); // true
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.hasAny(["foo", "world"])); // true
```

:::
