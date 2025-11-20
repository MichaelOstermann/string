# parseInt

`String.parseInt(target)`

Parses `target` string and returns an integer.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.parseInt("42"); // 42
String.parseInt("42.5"); // 42
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("42", String.parseInt()); // 42
pipe("42.5", String.parseInt()); // 42
```

:::
