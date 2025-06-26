import typescriptEslint from '@typescript-eslint/eslint-plugin'
import jsonFormat from 'eslint-plugin-json-format'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    ignores: [
      '**/.next',
      '**/dist',
      '**/node_modules/',
      '**/bun.lockb',
      '**/tsconfig.json',
      '**/.eslintrc.json',
      '**/package.json',
      '**/package-lock.json',
      '**/public',
      '**/build',
    ],
  },
  eslintConfigPrettier,
  ...compat.extends(
    'next/core-web-vitals',
    'prettier',
    'plugin:prettier/recommended'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'json-format': jsonFormat,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        overrides: [
          {
            files: ['*.yaml', '*.yml'],
            parser: 'yaml-eslint-parser',
          },
        ],
      },
    },

    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'no-useless-catch': 'off',

      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],
    },
  },
]
