module.exports = {
    root: true,
    env: {browser: true, es6: true, jest: true},
    extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:react/recommended', 'airbnb', 'prettier'],

    globals: {
        JSX: 'readonly',
    },

    parserOptions: {
        ecmaFeatures: {jsx: true},
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            node: {extensions: ['.js', '.jsx']},
        },
    },
    rules: {
        /** eslint */
        indent: 0,
        'no-use-before-define': 0,
        'no-shadow': 0,
        'arrow-body-style': 0,
        'max-len': [2, {code: 140}],
        'max-lines': [2, 500],
        'arrow-parens': [2, 'always'],
        'no-param-reassign': 0,
        'prefer-template': 0,
        'no-script-url': 2,
        'prefer-promise-reject-errors': 0,
        'padding-line-between-statements': [
            2,
            {blankLine: 'always', prev: 'import', next: '*'},
            {blankLine: 'any', prev: 'import', next: 'import'},
            {blankLine: 'always', prev: '*', next: 'return'},
            {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
            {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
        ],
        'default-case': 0,
        'prefer-destructuring': 0,
        'array-bracket-newline': [2, 'consistent'],
        'no-plusplus': 0,
        quotes: ['error', 'single'],
        'no-case-declarations': 0,

        'jsx-a11y/control-has-associated-label': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',

        /** react */
        'react/function-component-definition': [
            2,
            {
                namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
            },
        ],
        'react/prefer-stateless-function': 1,
        'react-hooks/exhaustive-deps': 0,
        'react/require-default-props': 0,
        'react/forbid-prop-types': 0,

        /** module */
        'import/prefer-default-export': 0,
    },
};
