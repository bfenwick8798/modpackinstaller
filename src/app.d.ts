// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	
	// Global constants set by Vite at build time
	const __PROJECT_ID__: string;
	const __PROJECT_NAME__: string;
	const __DEFAULT_PROFILE_ID__: string;
}

import '@poppanator/sveltekit-svg/dist/svg';

export {};
