module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/no-unescaped-entities': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'react/no-array-index-key': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'no-nested-ternary': 'off',
    },
}
