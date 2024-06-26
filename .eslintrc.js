module.exports = {
  root: true,
  extends: [
    'next',
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', '@tanstack/query'],
  settings: {
    next: {
      rootDir: ['./']
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-console': 'warn',
    curly: ['error', 'all'],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['UPPER_CASE']
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'padding-line-between-statements': [
      'error',
      /**
       * Add spacing before and after any multiline blocks
       */
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      /**
       * Add spacing before and after any multiline const declarations
       */
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-const' },
      /**
       * Add spacing before and after any multiline let declarations
       */
      { blankLine: 'always', prev: 'multiline-let', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-let' },
      /**
       * Add spacing before and after any multiline var declarations
       */
      { blankLine: 'always', prev: 'multiline-var', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-var' },
      /**
       * Add spacing before and after any multiline expressions
       */
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-expression' },
      /**
       * Add spacing before all return
       */
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: 'return'
      }
    ],
    'react/prop-types': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../../**'],
            message: 'Long relative imports are not allowed.'
          }
        ]
      }
    ],
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/stable-query-client': 'error'
  }
}
