# uncapitalize

```ts
function String.uncapitalize<T extends string>(
    target: T,
): Uncapitalize<T>
```

Uncapitalizes the first letter of `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.uncapitalize("Hello World"); // "hello World"
String.uncapitalize("Hello"); // "hello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("Hello World", String.uncapitalize()); // "hello World"
pipe("Hello", String.uncapitalize()); // "hello"
```

:::
