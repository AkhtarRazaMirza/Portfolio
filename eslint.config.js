import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import babelParser from "@babel/eslint-parser";

// eslint-config-next cannot be used here: it loads typescript-eslint, which hard-errors
// on TypeScript 7.0 (typescript-eslint#10940). We compose the same underlying plugins and
// parse with Babel instead, which is TypeScript-version independent. Every rule below is
// syntax-based, so nothing is lost; `yarn typecheck` (tsc) remains the source of truth for
// type correctness.
export default [
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts", "public/**", "*.config.js"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,jsx,ts,tsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: [
            ["@babel/preset-react", { runtime: "automatic" }],
            ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
          ],
        },
      },
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        process: "readonly",
        performance: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        URL: "readonly",
        React: "readonly",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",
      // TypeScript resolves types and globals; no-undef misfires on type-only names.
      "no-undef": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    },
  },
  {
    // Babel strips type annotations before ESLint sees them, so the core
    // no-unused-vars rule cannot tell that a type-only import is used.
    // tsc already reports genuinely unused code.
    files: ["**/*.{ts,tsx}"],
    rules: { "no-unused-vars": "off" },
  },
];
