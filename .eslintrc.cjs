module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/recommended'
    ],
    plugins: ['@typescript-eslint', 'import'],
    ignorePatterns: ['*.cjs', '.temp/**/*'],
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    ],
    env: {
        browser: true,
        es2017: true,
        node: true
    }
    // rules: {
    // 	'svelte/no-at-html-tags': 'off',
    // 	'import/extensions': [
    // 		'error',
    // 		'always',
    // 		{
    // 			ignorePackages: true,
    // 			pattern: {
    // 				js: 'always',
    // 				ts: 'never'
    // 			}
    // 		}
    // 	],
    // 	// 'no-restricted-imports': 'off',
    // 	'no-restricted-imports': [
    // 		'warn',
    // 		{
    // 			paths: [
    // 				{
    // 					name: '.',
    // 					message: 'Usage of local index imports is not allowed.'
    // 				},
    // 				{
    // 					name: './index',
    // 					message: 'Import from the source file instead.'
    // 				}
    // 			]
    // 		}
    // 	],
    // 	// '@typescript-eslint/no-restricted-imports': [
    // 	// 	'error',
    // 	// 	{
    // 	// 		patterns: [
    // 	// 			{
    // 	// 				group: ['$lib/*', '$lib', '!./*', '!../*'],
    // 	// 				message: 'Please only use RELATIVE import paths instead.'
    // 	// 			}
    // 	// 		]
    // 	// 	}
    // 	// ],
    // 	'no-empty-function': 'off',
    // 	'@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }]
    // }
};
