# lowerCase

```ts
function String.lowerCase<T extends string>(
    target: T,
): Lowercase<T>
```

Converts `target` string to lowercase.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.lowerCase("HELLO WORLD"); // "hello world"
String.lowerCase("Hello World"); // "hello world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("HELLO WORLD", String.lowerCase()); // "hello world"
pipe("Hello World", String.lowerCase()); // "hello world"
```

:::
