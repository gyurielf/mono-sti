import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: staticAdapter({
			pages: 'build',
			assets: 'build'
		})
	}
};
