import jsPlugin from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tsPlugin from 'typescript-eslint';

const eslintConfig = [
  jsPlugin.configs.recommended,
  ...tsPlugin.configs.recommended,
  {
    ignores: [
      '**/build/',
      '**/*.d.ts',
      'src/app/*',
      '_*.tsx',
      '*.sh',
      '*.json'
    ],
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
  },
  {
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_*$',
          varsIgnorePattern: '^_*$',
          caughtErrorsIgnorePattern: '^_*$',
        },
      ],
      'arrow-body-style': ['error', 'as-needed'],
      'linebreak-style': ['error', 'unix'],
      'max-len': [
        'error',
        { code: 80, ignoreRegExpLiterals: true, ignoreStrings: true },
      ],
      'no-console': [
        'error',
        { allow: ['debug', 'error', 'info', 'trace', 'warn'] },
      ],
      'no-template-curly-in-string': 'off',
      'object-shorthand': ['error', 'always'],
      'quote-props': ['warn', 'consistent-as-needed'],
      'quotes': [
        'error',
        'single',
        { allowTemplateLiterals: true, avoidEscape: true },
      ],
      'react/jsx-curly-brace-presence': ['error', 'always'],
      'react/self-closing-comp': ['error', { component: true, html: true }],
    },
  },
]

export default eslintConfig
