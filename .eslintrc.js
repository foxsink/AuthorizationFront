module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:vue/vue3-recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
    ],
    rules: {
        semi: 'off',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: { delimiter: 'comma' },
            singleline: { delimiter: 'comma' },
        }],
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        'vue/max-attributes-per-line': ['error', {
            singleline: 1,
            multiline: {
                max: 1,
            },
        }],
        'brace-style': ['error', '1tbs', { allowSingleLine: false }],
        'no-console': 'error',
        'no-undef': 'off',
        camelcase: 'warn',
        curly: ['error', 'all'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        indent: ['error', 4,
            {
                SwitchCase: 1,
            },
        ],
        'object-shorthand': ['error', 'always', { avoidQuotes: false }],
        'newline-after-var': ['error', 'always'],
        'newline-before-return': 'error',
        'vue/multi-word-component-names': ['off'],
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'always',
                component: 'always',
            },
            svg: 'always',
            math: 'always',
        }],
        'vue/require-v-for-key': 'warn',
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],
        'no-mixed-operators': [
            'error',
            {
                groups: [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||', '>', '>=', '<', '<='],
                    ['in', 'instanceof'],
                ],
                allowSamePrecedence: true,
            },
        ],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
    ignorePatterns: [
        'server/**',
    ],
};
