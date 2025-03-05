import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.svx']
};


export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			// static site routing to DigitalOcean
			// set DigitalOcean site custom pages 
			// Catchall to "index.html"
			fallback: "fallback.html", 
			precompress: false,
			strict: true
		})
	}
};
