import js from "@eslint/js";
import esImport from "eslint-plugin-import";
import promise from "eslint-plugin-promise";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  ...js.configs.recommended,
  ...promise.configs.recommended,
  ...esImport.configs.recommended,
  eslintConfigPrettier,
];
