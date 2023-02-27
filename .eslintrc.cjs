module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-newline': ['warn', { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-first-prop-new-line': ['warn', 'always'],
    'react/jsx-max-props-per-line': ['warn', { maximum: 1 }],
    'react/jsx-props-no-multi-spaces': ['warn'],
    'react/jsx-sort-props': 'warn',
    'react/jsx-space-before-closing': ['warn', 'always'],
    'react/jsx-tag-spacing': ['warn', { beforeSelfClosing: 'always' }],
    'react/jsx-wrap-multilines': ['warn',
      {
        assignment: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        declaration: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        return: 'parens-new-line'
      }
    ],
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/react-in-jsx-scope': 'off',

    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': 'error',
    'camelcase': 'warn',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'computed-property-spacing': ['error', 'never'],
    'curly': ['error', 'multi-line'],
    'eol-last': ['error', 'always'],
    'eqeqeq': ['error', 'smart'],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'max-depth': ['error', 3],
    'max-len': ['warn', 200],
    'max-statements': ['warn', 15],
    'new-cap': ['warn', { 'capIsNew': false }],
    'no-console': 'warn',
    'no-extend-native': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'warn',
    'no-use-before-define': ['error', 'nofunc'],
    'no-var': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['warn', 'single'],
    'semi': ['error', 'always'],
    'space-before-function-paren': 'off',
    'space-unary-ops': 'error'
  }
};
