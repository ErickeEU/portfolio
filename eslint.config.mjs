import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reacthooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier/recommended"

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
  {
    plugins: {
      reacthooks
    },
    rules: {
      "reacthooks/rules-of-hooks": "error",
      "reacthooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    settings: {
      "react": {
        "version": "detect"
      }
    }
  }
];
