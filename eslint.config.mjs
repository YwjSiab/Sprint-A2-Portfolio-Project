import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser, // Enables browser-specific globals like console, window
      }
    },
    rules: {
      "semi": ["error", "always"], // Requires semicolons
      "no-unused-vars": ["warn"], // Warns about unused variables
      "no-undef": "error" // Prevents using undefined variables
    }
  },
  pluginJs.configs.recommended
];