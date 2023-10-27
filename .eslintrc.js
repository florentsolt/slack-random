module.exports = {
  // https://eslint.org/docs/latest/use/configure/language-options
  env: {
    node: true,
  },

  // https://eslint.org/docs/latest/use/configure/language-options#specifying-parser-options
  parserOptions: {
    ecmaVersion: '2023',
  },

  extends: ['airbnb-base', 'prettier', 'plugin:jsdoc/recommended'],
  rules: {
    // https://eslint.org/docs/latest/rules/no-comma-dangle
    'comma-dangle': [
      'error',
      {
        objects: 'always-multiline',
        arrays: 'always-multiline',
        functions: 'never',
      },
    ],

    // https://eslint.org/docs/latest/rules/no-plusplus
    'no-plusplus': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#readme
    'jsdoc/require-description': 0,

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#readme
    'jsdoc/require-property-description': 0,

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#readme
    'jsdoc/require-param-description': 0,

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#readme
    'jsdoc/require-returns-description': 0,

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md
    'jsdoc/require-jsdoc': [
      'warn',
      {
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md#require
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          FunctionExpression: true,
          ClassExpression: true,
          ArrowFunctionExpression: true,
        },
      },
    ],
  },

  // https://eslint.org/docs/latest/use/configure/ignore#ignorepatterns-in-config-files
  ignorePatterns: ['**/coverage/*', '**/node_modules/*', '**build/*', '**docs/*'],

  overrides: [
    {
      files: ['**/__tests__/**', '**/*.test.js'],
      // https://eslint.org/docs/latest/use/configure/language-options
      env: {
        jest: true,
      },
    },
  ],
};
