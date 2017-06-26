module.exports = {
  extends: ['google', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
  rules: {
    'max-len': ['error', {'code': 100}],
    'require-jsdoc': 'off',
    'comma-dangle': ['error', 'never']
  }
};
