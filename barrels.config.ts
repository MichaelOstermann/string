import { defineConfig } from "@monstermann/barrels"
import { flat } from "@monstermann/barrels-flat"
import { namespace } from "@monstermann/barrels-namespace"

export default defineConfig([
    namespace({
        entries: "./packages/string/src/String",
    }),
    flat({
        entries: "./packages/string/src",
        include: ["*", "String/index.js"],
    }),
])
