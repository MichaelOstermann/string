# parseFloatOrElse

`String.parseFloatOrElse(target, orElse)`

Parses `target` string and returns a floating point number, or the result of calling `orElse` function with `target` if parsing fails.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.parseFloatOrElse("3.14", () => 0); // 3.14
String.parseFloatOrElse("abc", (str) => str.length); // 3
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe(
    "3.14",
    String.parseFloatOrElse(() => 0),
); // 3.14

pipe(
    "abc",
    String.parseFloatOrElse((str) => str.length),
); // 3
```

:::
