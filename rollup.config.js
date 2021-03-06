import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import cleanup from "rollup-plugin-cleanup";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

// TODO: Write banner
const banner = `/**
 * My project source.
 *
 * Copyright (c) MY_NAME
 * Licensed under MIT License
 */`

/** Suppress Rollup's circular import warnings for TypeScript files */
const suppressCircularImportWarnings = (message, defaultFunc) => {
    if (message.code === "CIRCULAR_DEPENDENCY") {
        return;
    }
    defaultFunc(message);
}

const tsPlugin = typescript({
    tsconfigOverride: {
        compilerOptions: { module: "ES2015" }
    }
});

export default [
    {
        input: "./src/index.ts",
        output: [
            { file: pkg.main, format: "cjs", banner },
            { file: pkg.module, format: "esm", banner }
        ],
        plugins: [
            tsPlugin,
            resolve(),
            cleanup({
                extensions: [".js", ".ts"],
                // TODO - Replace MY_NAME with the name used in file headers
                comments: /^((?!(MY_NAME)|tslint)[\s\S])*$/, // Removes file-header comments and tslint comments
                maxEmptyLines: 0
            })
        ],
        onwarn: suppressCircularImportWarnings
    },
    {
        input: "./src/index.ts",
        output: { file: pkg.browser, format: "umd", name: "PROJECT" }, // TODO - change PROJECT to project name
        plugins: [
            tsPlugin,
            resolve(),
            terser({
                output: { comments: false, preamble: banner }
            })
        ],
        onwarn: suppressCircularImportWarnings
    }
]