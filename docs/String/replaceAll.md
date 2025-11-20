# replaceAll

`String.replaceAll(target, search, replace)`

Replaces all occurrences of `search` string or regular expression in `target` string with `replace` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.replaceAll("hello world world", "world", "universe"); // "hello universe universe"
String.replaceAll("hello world", /o/g, "0"); // "hell0 w0rld"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world world", String.replaceAll("world", "universe")); // "hello universe universe"
pipe("hello world", String.replaceAll(/o/g, "0")); // "hell0 w0rld"
```

:::
