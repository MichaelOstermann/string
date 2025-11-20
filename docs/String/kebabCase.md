# kebabCase

`String.kebabCase(target)`

Converts `target` string to kebab-case format.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.kebabCase("hello world"); // "hello-world"
String.kebabCase("helloWorld"); // "hello-world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.kebabCase()); // "hello-world"
pipe("helloWorld", String.kebabCase()); // "hello-world"
```

:::
