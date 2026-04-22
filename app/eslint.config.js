import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import vitest from 'eslint-plugin-vitest';
import testingLibrary from 'eslint-plugin-testing-library';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      vitest,
      testingLibrary,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'react-refresh/only-export-components': 'off',
      'typescript-eslint/no-empty-object-type': 'warn',
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
