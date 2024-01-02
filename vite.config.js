import { sveltekit } from '@sveltejs/kit/vite';
import VitePluginRestart from 'vite-plugin-restart';

let vitePluginRestartOptions = {restart: ['./content/**']}

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		VitePluginRestart(vitePluginRestartOptions),
	]
};

export default config;





