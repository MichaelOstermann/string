# is

`String.is(target)`

Checks if `target` is a string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.is("hello"); // true
String.is(123); // false
String.is(null); // false
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello", String.is()); // true
pipe(123, String.is()); // false
pipe(null, String.is()); // false
```

:::
