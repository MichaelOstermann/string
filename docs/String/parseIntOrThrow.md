# parseIntOrThrow

```ts
function String.parseIntOrThrow(target: string): number
```

Parses `target` string and returns an integer, or throws an error if parsing fails.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.parseIntOrThrow("42"); // 42
String.parseIntOrThrow("abc"); // throws FnError
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("42", String.parseIntOrThrow()); // 42
pipe("abc", String.parseIntOrThrow()); // throws FnError
```

:::
