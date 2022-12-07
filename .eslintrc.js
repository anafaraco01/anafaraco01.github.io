/*
 * ESLint configuration template for Programming Basics Weekly Exams.
 * 
 * @author dwaard
 */
module.exports = {
  root: true,
  plugins: [
    'jsdoc',
    'etc'
  ],
  parserOptions: {
    'ecmaVersion': 2019
  },
  env: {
    'es6': true
  },
  rules: {
    // Indentation
    'indent': ['error', 2],

    // Semicolons
    'semi': ['error', 'always'],
    'semi-style': ['warn', 'last'],

    // Empty lines
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 1 }],

    // Spaces
    'no-multi-spaces': 'error',
    'semi-spacing': ['warn', {'before': false, 'after': true}],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'space-in-parens': ['error', 'never'],

    // Variable naming
    // WARNING: does not check if first char is Capital, but you should do it anyway
    'camelcase': ['error', { 'properties': 'always'}],
    'id-length': ['error', { 'min': 3, 'exceptions': ['i', 'j', 'n', 'PI', 'pi']}],
    'no-underscore-dangle': ['error'],

    // Comments
    'no-warning-comments': 'warn',
    'spaced-comment': ['warn', 'always'],
    'etc/no-commented-out-code': 'warn',
    // // JSDoc
    'jsdoc/check-alignment': 'warn',
    'jsdoc/multiline-blocks': 'warn',
    'jsdoc/require-jsdoc': 'error',

    // Other
    'no-var': 'error',
    'prefer-const': 'error',
    'quotes': ['warn', 'single'],
  }
};
