# capitalize

```ts
function String.capitalize<T extends string>(
    target: T,
): Capitalize<T>
```

Capitalizes the first letter of `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.capitalize("hello world"); // "Hello world"
String.capitalize("hello"); // "Hello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.capitalize()); // "Hello world"
pipe("hello", String.capitalize()); // "Hello"
```

:::
