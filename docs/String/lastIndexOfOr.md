# lastIndexOfOr

`String.lastIndexOfOr(target, source, or)`

Returns the index of the last occurrence of `source` string in `target` string, or the `or` value if not found.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.lastIndexOfOr("hello world hello", "hello", -1); // 12
String.lastIndexOfOr("hello world", "foo", -1); // -1
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world hello", String.lastIndexOfOr("hello", -1)); // 12
pipe("hello world", String.lastIndexOfOr("foo", -1)); // -1
```

:::
