# matchOrThrow

`String.matchOrThrow(target, source)`

Returns the result of matching `target` string against `source` string or regular expression, or throws an error if no match is found.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.matchOrThrow("hello world", "world"); // ["world", index: 6, input: "hello world", groups: undefined]
String.matchOrThrow("hello world", /\d+/); // throws FnError
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.matchOrThrow("world")); // ["world", index: 6, input: "hello world", groups: undefined]
pipe("hello world", String.matchOrThrow(/\d+/)); // throws FnError
```

:::
