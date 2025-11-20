# append

`String.append(target, source)`

Appends `source` or strings from `source` iterable to the end of `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.append("hello", " world"); // "hello world"
String.append("hello", [" ", "world"]); // "hello world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello", String.append(" world")); // "hello world"
pipe("hello", String.append([" ", "world"])); // "hello world"
```

:::
