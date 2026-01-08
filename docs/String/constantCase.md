# constantCase

```ts
function String.constantCase<T extends string>(
    target: T,
): ConstantCase<T>
```

Converts `target` string to CONSTANT_CASE format.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.constantCase("hello world"); // "HELLO_WORLD"
String.constantCase("helloWorld"); // "HELLO_WORLD"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.constantCase()); // "HELLO_WORLD"
pipe("helloWorld", String.constantCase()); // "HELLO_WORLD"
```

:::
