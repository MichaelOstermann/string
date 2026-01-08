# slice

```ts
function String.slice<
    T extends string,
    U extends number,
    V extends number | undefined = undefined,
>(target: T, start: U, end?: V): Slice<T, U, V>
```

Extracts a section of `target` string from `start` index to `end` index (exclusive). If `end` is not provided, extracts to the end of the string.

## Example

::: code-group

```ts [data-first]
import { String } from "@monstermann/string";

String.slice("hello world", 0, 5); // "hello"
String.slice("hello world", 6, 11); // "world"
String.slice("hello world", 6); // "world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.slice(0, 5)); // "hello"
pipe("hello world", String.slice(6, 11)); // "world"
pipe("hello world", String.slice(6)); // "world"
```

:::
