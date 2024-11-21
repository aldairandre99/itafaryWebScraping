import globals from "globals";
import pluginJs from "@eslint/js";
import js from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules : {
      eqeqeq: "off",
            "no-unused-vars": "error",
            "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
    }
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];