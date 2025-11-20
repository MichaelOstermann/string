# parseFloatOrThrow

`String.parseFloatOrThrow(target)`

Parses `target` string and returns a floating point number, or throws an error if parsing fails.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.parseFloatOrThrow("3.14"); // 3.14
String.parseFloatOrThrow("abc"); // throws FnError
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("3.14", String.parseFloatOrThrow()); // 3.14
pipe("abc", String.parseFloatOrThrow()); // throws FnError
```

:::
