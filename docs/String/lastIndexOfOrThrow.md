# lastIndexOfOrThrow

```ts
function String.lastIndexOfOrThrow(
    target: string,
    source: string,
): number
```

Returns the index of the last occurrence of `source` string in `target` string, or throws an error if not found.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.lastIndexOfOrThrow("hello world hello", "hello"); // 12
String.lastIndexOfOrThrow("hello world", "foo"); // throws FnError
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world hello", String.lastIndexOfOrThrow("hello")); // 12
pipe("hello world", String.lastIndexOfOrThrow("foo")); // throws FnError
```

:::
