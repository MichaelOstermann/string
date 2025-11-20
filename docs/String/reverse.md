# reverse

`String.reverse(target)`

Reverses the characters in `target` string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.reverse("hello world"); // "dlrow olleh"
String.reverse("abc"); // "cba"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.reverse()); // "dlrow olleh"
pipe("abc", String.reverse()); // "cba"
```

:::
