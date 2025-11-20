# parseFloatOr

`String.parseFloatOr(target, or)`

Parses `target` string and returns a floating point number, or the `or` value if parsing fails.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.parseFloatOr("3.14", 0); // 3.14
String.parseFloatOr("abc", 0); // 0
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("3.14", String.parseFloatOr(0)); // 3.14
pipe("abc", String.parseFloatOr(0)); // 0
```

:::
