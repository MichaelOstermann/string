# upperCase

```ts
function String.upperCase<T extends string>(
    target: T,
): Uppercase<T>
```

Converts `target` string to uppercase.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.upperCase("hello world"); // "HELLO WORLD"
String.upperCase("Hello World"); // "HELLO WORLD"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.upperCase()); // "HELLO WORLD"
pipe("Hello World", String.upperCase()); // "HELLO WORLD"
```

:::
