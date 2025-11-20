# replace

`String.replace(target, search, replace)`

Replaces the first occurrence of `search` string or regular expression in `target` string with `replace` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.replace("hello world", "world", "universe"); // "hello universe"
String.replace("hello world", /o/g, "0"); // "hell0 w0rld"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.replace("world", "universe")); // "hello universe"
pipe("hello world", String.replace(/o/g, "0")); // "hell0 w0rld"
```

:::
