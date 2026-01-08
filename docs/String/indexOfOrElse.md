# indexOfOrElse

```ts
function String.indexOfOrElse<T>(
    target: string,
    source: string,
    orElse: (target: string) => T,
): number | T
```

Returns the index of the first occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.indexOfOrElse("hello world", "world", () => -1); // 6
String.indexOfOrElse("hello world", "foo", (str) => str.length); // 11
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe(
    "hello world",
    String.indexOfOrElse("world", () => -1),
); // 6

pipe(
    "hello world",
    String.indexOfOrElse("foo", (str) => str.length),
); // 11
```

:::
