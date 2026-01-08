<div align="center">

<h1>string</h1>

![Minified](https://img.shields.io/badge/Minified-6.70_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff) ![Minzipped](https://img.shields.io/badge/Minzipped-2.01_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff)

**Functional utilities for strings.**

[Documentation](https://MichaelOstermann.github.io/string)

</div>

## Installation

```sh [npm]
npm install @monstermann/string
```

```sh [pnpm]
pnpm add @monstermann/string
```

```sh [yarn]
yarn add @monstermann/string
```

```sh [bun]
bun add @monstermann/string
```

## Tree-shaking

### Installation

```sh [npm]
npm install -D @monstermann/unplugin-string
```

```sh [pnpm]
pnpm -D add @monstermann/unplugin-string
```

```sh [yarn]
yarn -D add @monstermann/unplugin-string
```

```sh [bun]
bun -D add @monstermann/unplugin-string
```

### Usage

```ts [Vite]
// vite.config.ts
import string from "@monstermann/unplugin-string/vite";

export default defineConfig({
    plugins: [string()],
});
```

```ts [Rollup]
// rollup.config.js
import string from "@monstermann/unplugin-string/rollup";

export default {
    plugins: [string()],
};
```

```ts [Rolldown]
// rolldown.config.js
import string from "@monstermann/unplugin-string/rolldown";

export default {
    plugins: [string()],
};
```

```ts [Webpack]
// webpack.config.js
const string = require("@monstermann/unplugin-string/webpack");

module.exports = {
    plugins: [string()],
};
```

```ts [Rspack]
// rspack.config.js
const string = require("@monstermann/unplugin-string/rspack");

module.exports = {
    plugins: [string()],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import string from "@monstermann/unplugin-string/esbuild";

build({
    plugins: [string()],
});
```

## String

### append

```ts
function String.append(
    target: string,
    source: Iterable<string>,
): string
```

Appends `source` or strings from `source` iterable to the end of `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.append("hello", " world"); // "hello world"
String.append("hello", [" ", "world"]); // "hello world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello", String.append(" world")); // "hello world"
pipe("hello", String.append([" ", "world"])); // "hello world"
```

### camelCase

```ts
function String.camelCase<T extends string>(
    target: T,
): CamelCase<T>
```

Converts `target` string to camelCase format.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.camelCase("hello world"); // "helloWorld"
String.camelCase("hello-world"); // "helloWorld"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.camelCase()); // "helloWorld"
pipe("hello-world", String.camelCase()); // "helloWorld"
```

### capitalize

```ts
function String.capitalize<T extends string>(
    target: T,
): Capitalize<T>
```

Capitalizes the first letter of `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.capitalize("hello world"); // "Hello world"
String.capitalize("hello"); // "Hello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.capitalize()); // "Hello world"
pipe("hello", String.capitalize()); // "Hello"
```

### constantCase

```ts
function String.constantCase<T extends string>(
    target: T,
): ConstantCase<T>
```

Converts `target` string to CONSTANT_CASE format.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.constantCase("hello world"); // "HELLO_WORLD"
String.constantCase("helloWorld"); // "HELLO_WORLD"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.constantCase()); // "HELLO_WORLD"
pipe("helloWorld", String.constantCase()); // "HELLO_WORLD"
```

### create

```ts
function String.create(value?: any): string
```

An alias for `String(target)`.

#### Example

```ts
import { String } from "@monstermann/string";

String.create(10); // "10"
```

### deburr

```ts
function String.deburr(target: string): string
```

Removes diacritical marks from `target` string and converts special characters to their ASCII equivalents.

The function normalizes the string, strips combining diacritical marks, and replaces special characters like ligatures (Æ, œ) and extended Latin characters (ø, ß, þ) with their closest ASCII representations.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.deburr("café"); // "cafe"
String.deburr("naïve résumé"); // "naive resume"
String.deburr("Æsop's Œuvres"); // "Aesop's Oeuvres"
String.deburr("Ørsted"); // "Orsted"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("café", String.deburr()); // "cafe"
pipe("naïve résumé", String.deburr()); // "naive resume"
pipe("Æsop's Œuvres", String.deburr()); // "Aesop's Oeuvres"
pipe("Ørsted", String.deburr()); // "Orsted"
```

### drop

```ts
function String.drop(target: string, amount: number): string
```

Removes the first `amount` characters from `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.drop("hello world", 6); // "world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.drop(6)); // "world"
```

### dropLast

```ts
function String.dropLast(target: string, amount: number): string
```

Removes the last `amount` characters from `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.dropLast("hello world", 6); // "hello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.dropLast(6)); // "hello"
```

### endsWith

```ts
function String.endsWith(target: string, source: string): boolean
```

Checks if `target` string ends with `source` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.endsWith("hello world", "world"); // true
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.endsWith("world")); // true
```

### graphemes

```ts
function String.graphemes(target: string): Generator<string>
```

Returns a generator that yields individual grapheme clusters from `target` string.

A grapheme cluster represents a single user-perceived character, which may consist of multiple Unicode code points (e.g., emojis with modifiers, base characters with combining diacriticals).

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

[...String.graphemes("hello")]; // ["h", "e", "l", "l", "o"]
[...String.graphemes("👨‍👩‍👧‍👦")]; // ["👨‍👩‍👧‍👦"]
[...String.graphemes("café")]; // ["c", "a", "f", "é"]
[...String.graphemes("👋🏽")]; // ["👋🏽"]

// Using in a loop
for (const grapheme of String.graphemes("hello👋")) {
    console.log(grapheme); // "h", "e", "l", "l", "o", "👋"
}
```

```ts [data-last]
import { String } from "@monstermann/string";

[...pipe("hello", String.graphemes())]; // ["h", "e", "l", "l", "o"]
[...pipe("👨‍👩‍👧‍👦", String.graphemes())]; // ["👨‍👩‍👧‍👦"]
[...pipe("café", String.graphemes())]; // ["c", "a", "f", "é"]
[...pipe("👋🏽", String.graphemes())]; // ["👋🏽"]

// Using in a loop
for (const grapheme of pipe("hello👋", String.graphemes())) {
    console.log(grapheme); // "h", "e", "l", "l", "o", "👋"
}
```

### has

```ts
function String.has(target: string, source: string): boolean
```

Checks if `target` string contains `source` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.has("hello world", "world"); // true
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.has("world")); // true
```

### hasAll

```ts
function String.hasAll(
    target: string,
    source: Iterable<string>,
): boolean
```

Checks if `target` string contains all strings from the `source` iterable.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.hasAll("hello world", ["hello", "world"]); // true
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.hasAll(["hello", "world"])); // true
```

### hasAny

```ts
function String.hasAny(
    target: string,
    source: Iterable<string>,
): boolean
```

Checks if `target` string contains any of the strings from the `source` iterable.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.hasAny("hello world", ["foo", "world"]); // true
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.hasAny(["foo", "world"])); // true
```

### hasNone

```ts
function String.hasNone(
    target: string,
    source: Iterable<string>,
): boolean
```

Checks if `target` string contains none of the strings from the `source` iterable.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.hasNone("hello world", ["foo", "bar"]); // true
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.hasNone(["foo", "bar"])); // true
```

### indexOf

```ts
function String.indexOf(target: string, source: string): number
```

Returns the index of the first occurrence of `source` string in `target` string, or -1 if not found.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.indexOf("hello world", "world"); // 6
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.indexOf("world")); // 6
```

### indexOfOr

```ts
function String.indexOfOr<T>(
    target: string,
    source: string,
    or: T,
): number | T
```

Returns the index of the first occurrence of `source` string in `target` string, or the `or` value if not found.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.indexOfOr("hello world", "world", -1); // 6
String.indexOfOr("hello world", "foo", -1); // -1
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.indexOfOr("world", -1)); // 6
pipe("hello world", String.indexOfOr("foo", -1)); // -1
```

### indexOfOrElse

```ts
function String.indexOfOrElse<T>(
    target: string,
    source: string,
    orElse: (target: string) => T,
): number | T
```

Returns the index of the first occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.indexOfOrElse("hello world", "world", () => -1); // 6
String.indexOfOrElse("hello world", "foo", (str) => str.length); // 11
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe(
    "hello world",
    String.indexOfOrElse("world", () => -1),
); // 6

pipe(
    "hello world",
    String.indexOfOrElse("foo", (str) => str.length),
); // 11
```

### indexOfOrThrow

```ts
function String.indexOfOrThrow(
    target: string,
    source: string,
): number
```

Returns the index of the first occurrence of `source` string in `target` string, or throws an error if not found.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.indexOfOrThrow("hello world", "world"); // 6
String.indexOfOrThrow("hello world", "foo"); // throws FnError
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.indexOfOrThrow("world")); // 6
pipe("hello world", String.indexOfOrThrow("foo")); // throws FnError
```

### is

```ts
function String.is(target: unknown): target is string
```

Checks if `target` is a string.

#### Example

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

### isASCII

```ts
function String.isASCII(target: string): boolean
```

Checks if `target` string contains only ASCII characters (U+0000 to U+007F).

Returns `true` if all characters in the string are within the ASCII range, `false` otherwise.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.isASCII("hello world"); // true
String.isASCII("café"); // false
String.isASCII("123!@#"); // true
String.isASCII("hello 🌍"); // false
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.isASCII()); // true
pipe("café", String.isASCII()); // false
pipe("123!@#", String.isASCII()); // true
pipe("hello 🌍", String.isASCII()); // false
```

### isEmpty

```ts
function String.isEmpty(target: string): boolean
```

Checks if `target` string is empty.

#### Example

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

### kebabCase

```ts
function String.kebabCase<T extends string>(
    target: T,
): KebabCase<T>
```

Converts `target` string to kebab-case format.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.kebabCase("hello world"); // "hello-world"
String.kebabCase("helloWorld"); // "hello-world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.kebabCase()); // "hello-world"
pipe("helloWorld", String.kebabCase()); // "hello-world"
```

### lastIndexOf

```ts
function String.lastIndexOf(target: string, source: string): number
```

Returns the index of the last occurrence of `source` string in `target` string, or -1 if not found.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.lastIndexOf("hello world hello", "hello"); // 12
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world hello", String.lastIndexOf("hello")); // 12
```

### lastIndexOfOr

```ts
function String.lastIndexOfOr<T>(
    target: string,
    source: string,
    or: T,
): number | T
```

Returns the index of the last occurrence of `source` string in `target` string, or the `or` value if not found.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.lastIndexOfOr("hello world hello", "hello", -1); // 12
String.lastIndexOfOr("hello world", "foo", -1); // -1
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world hello", String.lastIndexOfOr("hello", -1)); // 12
pipe("hello world", String.lastIndexOfOr("foo", -1)); // -1
```

### lastIndexOfOrElse

```ts
function String.lastIndexOfOrElse<T>(
    target: string,
    source: string,
    orElse: (target: string) => T,
): number | T
```

Returns the index of the last occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.lastIndexOfOrElse("hello world hello", "hello", () => -1); // 12
String.lastIndexOfOrElse("hello world", "foo", (str) => str.length); // 11
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe(
    "hello world hello",
    String.lastIndexOfOrElse("hello", () => -1),
); // 12

pipe(
    "hello world",
    String.lastIndexOfOrElse("foo", (str) => str.length),
); // 11
```

### lastIndexOfOrThrow

```ts
function String.lastIndexOfOrThrow(
    target: string,
    source: string,
): number
```

Returns the index of the last occurrence of `source` string in `target` string, or throws an error if not found.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.lastIndexOfOrThrow("hello world hello", "hello"); // 12
String.lastIndexOfOrThrow("hello world", "foo"); // throws FnError
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world hello", String.lastIndexOfOrThrow("hello")); // 12
pipe("hello world", String.lastIndexOfOrThrow("foo")); // throws FnError
```

### length

```ts
function String.length(target: string): number
```

Returns the length of `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.length("hello world"); // 11
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.length()); // 11
```

### lowerCase

```ts
function String.lowerCase<T extends string>(
    target: T,
): Lowercase<T>
```

Converts `target` string to lowercase.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.lowerCase("HELLO WORLD"); // "hello world"
String.lowerCase("Hello World"); // "hello world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("HELLO WORLD", String.lowerCase()); // "hello world"
pipe("Hello World", String.lowerCase()); // "hello world"
```

### match

```ts
function String.match(
    target: string,
    source: string | RegExp,
): RegExpMatchArray | null
```

Returns the result of matching `target` string against `source` string or regular expression, or null if no match is found.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.match("hello world", "world"); // ["world", index: 6, input: "hello world", groups: undefined]
String.match("hello world", /\d+/); // null
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.match("world")); // ["world", index: 6, input: "hello world", groups: undefined]
pipe("hello world", String.match(/\d+/)); // null
```

### matchOr

```ts
function String.matchOr<T>(
    target: string,
    source: string | RegExp,
    or: T,
): RegExpMatchArray | T
```

Returns the result of matching `target` string against `source` string or regular expression, or the `or` value if no match is found.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.matchOr("hello world", "world", []); // ["world", index: 6, input: "hello world", groups: undefined]
String.matchOr("hello world", /\d+/, []); // []
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.matchOr("world", [])); // ["world", index: 6, input: "hello world", groups: undefined]
pipe("hello world", String.matchOr(/\d+/, [])); // []
```

### matchOrElse

```ts
function String.matchOrElse<T>(
    target: string,
    source: string | RegExp,
    orElse: (target: string) => T,
): RegExpMatchArray | T
```

Returns the result of matching `target` string against `source` string or regular expression, or the result of calling `orElse` function with `target` if no match is found.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.matchOrElse("hello world", "world", () => []); // ["world", index: 6, input: "hello world", groups: undefined]
String.matchOrElse("hello world", /\d+/, (str) => [str]); // ["hello world"]
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe(
    "hello world",
    String.matchOrElse("world", () => []),
); // ["world", index: 6, input: "hello world", groups: undefined]

pipe(
    "hello world",
    String.matchOrElse(/\d+/, (str) => [str]),
); // ["hello world"]
```

### matchOrThrow

```ts
function String.matchOrThrow(
    target: string,
    source: string | RegExp,
): RegExpMatchArray
```

Returns the result of matching `target` string against `source` string or regular expression, or throws an error if no match is found.

#### Example

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

### padEnd

```ts
function String.padEnd(
    target: string,
    length: number,
    fill: string,
): string
```

Pads `target` string from the end with `fill` string until the result reaches the specified `length`.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.padEnd("hello", 10, " "); // "hello     "
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello", String.padEnd(10, " ")); // "hello     "
```

### padStart

```ts
function String.padStart(
    target: string,
    length: number,
    fill: string,
): string
```

Pads `target` string from the start with `fill` string until the result reaches the specified `length`.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.padStart("hello", 10, " "); // "     hello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello", String.padStart(10, " ")); // "     hello"
```

### parseFloat

```ts
function String.parseFloat(target: string): number
```

Parses `target` string and returns a floating point number.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.parseFloat("3.14"); // 3.14
String.parseFloat("42.5abc"); // 42.5
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("3.14", String.parseFloat()); // 3.14
pipe("42.5abc", String.parseFloat()); // 42.5
```

### parseFloatOr

```ts
function String.parseFloatOr<T>(target: string, or: T): number | T
```

Parses `target` string and returns a floating point number, or the `or` value if parsing fails.

#### Example

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

### parseFloatOrElse

```ts
function String.parseFloatOrElse<T>(
    target: string,
    orElse: (target: string) => T,
): number | T
```

Parses `target` string and returns a floating point number, or the result of calling `orElse` function with `target` if parsing fails.

#### Example

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

### parseFloatOrThrow

```ts
function String.parseFloatOrThrow(target: string): number
```

Parses `target` string and returns a floating point number, or throws an error if parsing fails.

#### Example

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

### parseInt

```ts
function String.parseInt(target: string): number
```

Parses `target` string and returns an integer.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.parseInt("42"); // 42
String.parseInt("42.5"); // 42
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("42", String.parseInt()); // 42
pipe("42.5", String.parseInt()); // 42
```

### parseIntOr

```ts
function String.parseIntOr<T>(target: string, or: T): number | T
```

Parses `target` string and returns an integer, or the `or` value if parsing fails.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.parseIntOr("42", 0); // 42
String.parseIntOr("abc", 0); // 0
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("42", String.parseIntOr(0)); // 42
pipe("abc", String.parseIntOr(0)); // 0
```

### parseIntOrElse

```ts
function String.parseIntOrElse<T>(
    target: string,
    orElse: (target: string) => T,
): number | T
```

Parses `target` string and returns an integer, or the result of calling `orElse` function with `target` if parsing fails.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.parseIntOrElse("42", () => 0); // 42
String.parseIntOrElse("abc", (str) => str.length); // 3
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe(
    "42",
    String.parseIntOrElse(() => 0),
); // 42

pipe(
    "abc",
    String.parseIntOrElse((str) => str.length),
); // 3
```

### parseIntOrThrow

```ts
function String.parseIntOrThrow(target: string): number
```

Parses `target` string and returns an integer, or throws an error if parsing fails.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.parseIntOrThrow("42"); // 42
String.parseIntOrThrow("abc"); // throws FnError
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("42", String.parseIntOrThrow()); // 42
pipe("abc", String.parseIntOrThrow()); // throws FnError
```

### pascalCase

```ts
function String.pascalCase<T extends string>(
    target: T,
): PascalCase<T>
```

Converts `target` string to PascalCase format.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.pascalCase("hello world"); // "HelloWorld"
String.pascalCase("hello-world"); // "HelloWorld"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.pascalCase()); // "HelloWorld"
pipe("hello-world", String.pascalCase()); // "HelloWorld"
```

### prepend

```ts
function String.prepend(
    target: string,
    source: Iterable<string>,
): string
```

Prepends `string` or strings from `source` iterable to the beginning of `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.prepend("world", "hello "); // "hello world"
String.prepend("world", ["hello", " "]); // "hello world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("world", String.prepend("hello ")); // "hello world"
pipe("world", String.prepend(["hello", " "])); // "hello world"
```

### repeat

```ts
function String.repeat<T extends string, U extends number>(
    target: T,
    amount: U,
): Repeat<T, U>
```

Repeats `target` string `amount` times.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.repeat("hello", 3); // "hellohellohello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello", String.repeat(3)); // "hellohellohello"
```

### replace

```ts
function String.replace<
    T extends string,
    U extends string | RegExp,
    V extends string,
>(target: T, search: U, replacement: V): Replace<T, U, V>
```

Replaces the first occurrence of `search` string or regular expression in `target` string with `replace` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.replace("hello world", "world", "universe"); // "hello universe"
String.replace("hello world", /o/g, "0"); // "hell0 w0rld"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.replace("world", "universe")); // "hello universe"
pipe("hello world", String.replace(/o/g, "0")); // "hell0 w0rld"
```

### replaceAll

```ts
function String.replaceAll<
    T extends string,
    U extends string | RegExp,
    V extends string,
>(target: T, search: U, replacement: V): ReplaceAll<T, U, V>
```

Replaces all occurrences of `search` string or regular expression in `target` string with `replace` string.

#### Example

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

### reverse

```ts
function String.reverse<T extends string>(target: T): Reverse<T>
```

Reverses the characters in `target` string.

#### Example

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

### slice

```ts
function String.slice<
    T extends string,
    U extends number,
    V extends number | undefined = undefined,
>(target: T, start: U, end?: V): Slice<T, U, V>
```

Extracts a section of `target` string from `start` index to `end` index (exclusive). If `end` is not provided, extracts to the end of the string.

#### Example

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

### slugify

```ts
function String.slugify(target: string): string
```

Converts `target` string to a URL-friendly slug format.

The function removes diacritical marks, converts to lowercase, replaces whitespace and separators with hyphens, removes non-alphanumeric characters, and cleans up multiple or leading/trailing hyphens.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.slugify("Hello World"); // "hello-world"
String.slugify("Café au Lait"); // "cafe-au-lait"
String.slugify("  Multiple   Spaces  "); // "multiple-spaces"
String.slugify("Special!@#Characters"); // "specialcharacters"
String.slugify("foo_bar/baz"); // "foo-bar-baz"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("Hello World", String.slugify()); // "hello-world"
pipe("Café au Lait", String.slugify()); // "cafe-au-lait"
pipe("  Multiple   Spaces  ", String.slugify()); // "multiple-spaces"
pipe("Special!@#Characters", String.slugify()); // "specialcharacters"
pipe("foo_bar/baz", String.slugify()); // "foo-bar-baz"
```

### snakeCase

```ts
function String.snakeCase<T extends string>(
    target: T,
): SnakeCase<T>
```

Converts `target` string to snake_case format.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.snakeCase("hello world"); // "hello_world"
String.snakeCase("helloWorld"); // "hello_world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.snakeCase()); // "hello_world"
pipe("helloWorld", String.snakeCase()); // "hello_world"
```

### split

```ts
function String.split<T extends string, U extends RegExp>(
    target: T,
    delimiter: U,
): string[]
```

Splits `target` string into an array of substrings using `source` string or regular expression as the separator.

#### Example

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

### startsWith

```ts
function String.startsWith(target: string, source: string): boolean
```

Checks if `target` string starts with `source` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.startsWith("hello world", "hello"); // true
String.startsWith("hello world", "world"); // false
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.startsWith("hello")); // true
pipe("hello world", String.startsWith("world")); // false
```

### take

```ts
function String.take(target: string, amount: number): string
```

Takes the first `amount` characters from `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.take("hello world", 5); // "hello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.take(5)); // "hello"
```

### takeLast

```ts
function String.takeLast(target: string, amount: number): string
```

Takes the last `amount` characters from `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.takeLast("hello world", 5); // "world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.takeLast(5)); // "world"
```

### test

```ts
function String.test(target: string, source: RegExp): boolean
```

Tests if `target` string matches the `source` regular expression.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.test("hello world", /world/); // true
String.test("hello world", /\d+/); // false
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.test(/world/)); // true
pipe("hello world", String.test(/\d+/)); // false
```

### titleCase

```ts
function String.titleCase<T extends string>(
    target: T,
): TitleCase<T>
```

Converts `target` string to Title Case format.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.titleCase("hello world"); // "Hello World"
String.titleCase("hello-world"); // "Hello World"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.titleCase()); // "Hello World"
pipe("hello-world", String.titleCase()); // "Hello World"
```

### trim

```ts
function String.trim<T extends string>(target: T): Trim<T>
```

Removes whitespace from both ends of `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.trim("  hello world  "); // "hello world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("  hello world  ", String.trim()); // "hello world"
```

### trimEnd

```ts
function String.trimEnd<T extends string>(target: T): TrimEnd<T>
```

Removes whitespace from the end of `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.trimEnd("  hello world  "); // "  hello world"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("  hello world  ", String.trimEnd()); // "  hello world"
```

### trimStart

```ts
function String.trimStart<T extends string>(
    target: T,
): TrimStart<T>
```

Removes whitespace from the start of `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.trimStart("  hello world  "); // "hello world  "
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("  hello world  ", String.trimStart()); // "hello world  "
```

### uncapitalize

```ts
function String.uncapitalize<T extends string>(
    target: T,
): Uncapitalize<T>
```

Uncapitalizes the first letter of `target` string.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.uncapitalize("Hello World"); // "hello World"
String.uncapitalize("Hello"); // "hello"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("Hello World", String.uncapitalize()); // "hello World"
pipe("Hello", String.uncapitalize()); // "hello"
```

### upperCase

```ts
function String.upperCase<T extends string>(
    target: T,
): Uppercase<T>
```

Converts `target` string to uppercase.

#### Example

```ts [data-first]
import { String } from "@monstermann/string";

String.upperCase("hello world"); // "HELLO WORLD"
String.upperCase("Hello World"); // "HELLO WORLD"
```

```ts [data-last]
import { String } from "@monstermann/string";

pipe("hello world", String.upperCase()); // "HELLO WORLD"
pipe("Hello World", String.upperCase()); // "HELLO WORLD"
```
