---
aside: true
---

# string

<Badge type="info" class="size">
    <span>Minified</span>
    <span>6.70 KB</span>
</Badge>

<Badge type="info" class="size">
    <span>Minzipped</span>
    <span>2.01 KB</span>
</Badge>

**Functional utilities for strings.**

## Installation

::: code-group

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

:::

## Tree-shaking

### Installation

::: code-group

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

:::

### Usage

::: code-group

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

:::
