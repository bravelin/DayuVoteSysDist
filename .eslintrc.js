module.exports = {
    root: true,
    env: {
        node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'standard',
    rules: {
        'indent': [2, 4],
        'eqeqeq': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'arrow-parens': 'off',
        'valid-jsdoc': 'off',
        'eol-last': 'off',
        'array-bracket-spacing': 'off',
        'no-unused-vars': 'off',
        'no-else-return': 'off',
        'strict': 'off',
        'prefer-promise-reject-errors': [
            'off',
            {
                'allowEmptyReject': true
            }
        ],
        'space-before-function-paren': 0,
        'no-irregular-whitespace': [
            'error',
            {
                'skipComments': true
            }
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'only-multiline',
                'objects': 'only-multiline'
            }
        ]
    },
    globals: {
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
