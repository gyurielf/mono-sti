// module.exports = {
// 	useTabs: true,
// 	singleQuote: true,
// 	trailingComma: 'none',
// 	printWidth: 100,
// 	tabWidth: 4,
// 	plugins: ['prettier-plugin-svelte'],
// 	pluginSearchDirs: ['.'],
// 	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
// };
// module.exports = require('./packages/config/prettier-preset');

module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: none,
	printWidth: 100,
	plugins: ['prettier-plugin-svelte'],
	overrides: [
		{
			files: ['*.svelte'],
			options: {
				bracketSameLine: false
			}
		},
		{
			files: ['README.md', 'packages/*/README.md'],
			options: {
				useTabs: false,
				tabWidth: 2
			}
		}
	],
	pluginSearchDirs: ['.']
};
