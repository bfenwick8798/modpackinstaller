import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	
	return {
		plugins: [sveltekit()],
		define: {
			// Make environment variables available at build time
			__PROJECT_ID__: JSON.stringify(env.VITE_PROJECT_ID || '1KVo5zza'),
			__PROJECT_NAME__: JSON.stringify(env.VITE_PROJECT_NAME || 'Fabulously Optimized'),
			__DEFAULT_PROFILE_ID__: JSON.stringify(env.VITE_DEFAULT_PROFILE_ID || 'fabulously-optimized')
		}
	};
});
