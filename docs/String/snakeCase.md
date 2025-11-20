# snakeCase

`String.snakeCase(target)`

Converts `target` string to snake_case format.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.snakeCase("hello world"); // "hello_world"
String.snakeCase("helloWorld"); // "hello_world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.snakeCase()); // "hello_world"
pipe("helloWorld", String.snakeCase()); // "hello_world"
```

:::
