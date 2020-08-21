module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'prettier',
    'prettier/babel',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {},
  rules: {
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: [
        ['@', `src`],
        ['@components', `src/components`],
        ['@pages', `src/pages`],
        ['@utils', `src/utils`],
        ['@templates', `src/templates`],
        ['@root', 'src/root'],
        ['@hooks', 'src/hooks'],
      ],
    },
  },
}
