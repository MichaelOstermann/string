# parseIntOrElse

```ts
function String.parseIntOrElse<T>(
    target: string,
    orElse: (target: string) => T,
): number | T
```

Parses `target` string and returns an integer, or the result of calling `orElse` function with `target` if parsing fails.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.parseIntOrElse("42", () => 0); // 42
String.parseIntOrElse("abc", (str) => str.length); // 3
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe(
    "42",
    String.parseIntOrElse(() => 0),
); // 42

pipe(
    "abc",
    String.parseIntOrElse((str) => str.length),
); // 3
```

:::
