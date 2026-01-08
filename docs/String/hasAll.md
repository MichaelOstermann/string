# hasAll

```ts
function String.hasAll(
    target: string,
    source: Iterable<string>,
): boolean
```

Checks if `target` string contains all strings from the `source` iterable.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.hasAll("hello world", ["hello", "world"]); // true
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.hasAll(["hello", "world"])); // true
```

:::
