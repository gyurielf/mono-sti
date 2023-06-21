import adapter from '@sveltejs/adapter-auto';
import mm from 'micromatch';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter()
	}
	// package: {
	// 	exports: (filepath) => {
	// 		if (filepath.endsWith('.d.ts')) return false;
	// 		if (
	// 			filepath === 'index.ts' ||
	// 			filepath === 'index.js' ||
	// 			filepath.endsWith('styles/flags.css')
	// 		) {
	// 			return true;
	// 		}
	// 		return false;
	// 	},
	// 	files: (filepath) => {
	// 		return mm.all(filepath, [
	// 			'!**/.*',
	// 			'!**/*.test.*',
	// 			'!**/*.spec.*',
	// 			'!**/*.sh',
	// 			'!**/env.*',
	// 			'!**/views/*',
	// 			'!**/examples/*',
	// 			'!**/utils/typeCheck.ts',
	// 			'!**/utils/examples/*',
	// 			'!**/utils/directives/focusAction.ts',
	// 			'!**/utils/directives/seoJsonLdAction.ts',
	// 			'!**/components/utils/*',
	// 			'!**/components/examples/*',
	// 			'!**/components/Input/AdvancedTelInput.svelte',
	// 			'!**/stores/DevExampleStores.ts',
	// 			'!**/assets/regions.ts',
	// 			'!**/assets/telTypes.ts'
	// 		]);
	// 	}
	// }
};
