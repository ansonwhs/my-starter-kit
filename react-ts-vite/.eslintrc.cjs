module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'array-callback-return': [
      'error',
      {
        checkForEach: true,
        allowVoid: true,
      }
    ],
    // Possible Problems
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-duplicate-imports': 'error',
    'no-promise-executor-return': 'warn',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'warn',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-use-before-define': 'error',
    'require-atomic-updates': 'error',
    // Suggestions
    'arrow-body-style': [
      'error',
      'as-needed'
    ],
    'block-scoped-var': 'error',
    'camelcase': [
      'error',
      {
        properties: 'always',
        ignoreImports: true,
        ignoreGlobals: true,
      },
    ],
    'complexity': [
      'error',
      15
    ],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified:
          true
      },
    ],
    'curly': [
      'error',
      'multi-line',
    ],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    'eqeqeq': [
      'error',
      'always',
    ],
    'func-name-matching': 'warn',
    'func-names': 'warn',
    'func-style': [
      'warn',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
  },
}
