module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'react-app'],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'member-access': 'off',
    'object-literal-sort-keys': 'off',
    'ordered-imports': 'off',
    'interface-name': 'off',
    'no-submodule-imports': 'off',
    'jsx-no-lambda': 'off',
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx', '.js', '.jsx']}],
  },
};
