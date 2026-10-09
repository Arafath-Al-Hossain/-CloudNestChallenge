import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  },
  pluginJs.configs.recommended,
];

