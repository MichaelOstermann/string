# isEmpty

```ts
function String.isEmpty(target: string): boolean
```

Checks if `target` string is empty.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.isEmpty(""); // true
String.isEmpty("hello"); // false
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("", String.isEmpty()); // true
pipe("hello", String.isEmpty()); // false
```

:::
