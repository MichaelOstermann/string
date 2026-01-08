# indexOfOr

```ts
function String.indexOfOr<T>(
    target: string,
    source: string,
    or: T,
): number | T
```

Returns the index of the first occurrence of `source` string in `target` string, or the `or` value if not found.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.indexOfOr("hello world", "world", -1); // 6
String.indexOfOr("hello world", "foo", -1); // -1
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.indexOfOr("world", -1)); // 6
pipe("hello world", String.indexOfOr("foo", -1)); // -1
```

:::
