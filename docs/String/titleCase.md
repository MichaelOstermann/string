# titleCase

`String.titleCase(target)`

Converts `target` string to Title Case format.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.titleCase("hello world"); // "Hello World"
String.titleCase("hello-world"); // "Hello World"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.titleCase()); // "Hello World"
pipe("hello-world", String.titleCase()); // "Hello World"
```

:::
