module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
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
    'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx', '.js', '.jsx']}],
  },
};
