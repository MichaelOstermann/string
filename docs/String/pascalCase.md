# pascalCase

`String.pascalCase(target)`

Converts `target` string to PascalCase format.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.pascalCase("hello world"); // "HelloWorld"
String.pascalCase("hello-world"); // "HelloWorld"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.pascalCase()); // "HelloWorld"
pipe("hello-world", String.pascalCase()); // "HelloWorld"
```

:::
