# lastIndexOfOrElse

`String.lastIndexOfOrElse(target, source, orElse)`

Returns the index of the last occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.lastIndexOfOrElse("hello world hello", "hello", () => -1); // 12
String.lastIndexOfOrElse("hello world", "foo", (str) => str.length); // 11
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe(
    "hello world hello",
    String.lastIndexOfOrElse("hello", () => -1),
); // 12

pipe(
    "hello world",
    String.lastIndexOfOrElse("foo", (str) => str.length),
); // 11
```

:::
