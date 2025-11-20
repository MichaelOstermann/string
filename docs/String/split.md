# split

`String.split(target, source)`

Splits `target` string into an array of substrings using `source` string or regular expression as the separator.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.split("hello,world,test", ","); // ["hello", "world", "test"]
String.split("hello world", /\s+/); // ["hello", "world"]
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello,world,test", String.split(",")); // ["hello", "world", "test"]
pipe("hello world", String.split(/\s+/)); // ["hello", "world"]
```

:::
