# indexOfOrThrow

```ts
function String.indexOfOrThrow(
    target: string,
    source: string,
): number
```

Returns the index of the first occurrence of `source` string in `target` string, or throws an error if not found.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.indexOfOrThrow("hello world", "world"); // 6
String.indexOfOrThrow("hello world", "foo"); // throws FnError
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.indexOfOrThrow("world")); // 6
pipe("hello world", String.indexOfOrThrow("foo")); // throws FnError
```

:::
