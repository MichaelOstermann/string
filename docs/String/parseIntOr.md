# parseIntOr

```ts
function String.parseIntOr<T>(target: string, or: T): number | T
```

Parses `target` string and returns an integer, or the `or` value if parsing fails.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.parseIntOr("42", 0); // 42
String.parseIntOr("abc", 0); // 0
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("42", String.parseIntOr(0)); // 42
pipe("abc", String.parseIntOr(0)); // 0
```

:::
