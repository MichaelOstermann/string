# camelCase

`String.camelCase(target)`

Converts `target` string to camelCase format.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.camelCase("hello world"); // "helloWorld"
String.camelCase("hello-world"); // "helloWorld"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.camelCase()); // "helloWorld"
pipe("hello-world", String.camelCase()); // "helloWorld"
```

:::
