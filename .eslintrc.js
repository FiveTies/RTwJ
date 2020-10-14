module.exports = {
  'env': {
    'browser': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'require-jsdoc': 0
  },
};
