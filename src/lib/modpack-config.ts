// Modpack configuration that can be set at build time via environment variables
// This allows the same installer to be built for different modpacks

export interface ModpackConfig {
	/** The Modrinth project ID to download */
	projectId: string;
	/** Display name of the modpack */
	projectName: string;
	/** Default launcher profile ID */
	defaultProfileId: string;
}

/**
 * Get the current modpack configuration.
 * Values are set at build time via environment variables:
 * - VITE_PROJECT_ID: Modrinth project ID (default: '1KVo5zza' for Fabulously Optimized)
 * - VITE_PROJECT_NAME: Display name (default: 'Fabulously Optimized')
 * - VITE_DEFAULT_PROFILE_ID: Profile ID (default: 'fabulously-optimized')
 */
export function getModpackConfig(): ModpackConfig {
	return {
		projectId: __PROJECT_ID__,
		projectName: __PROJECT_NAME__,
		defaultProfileId: __DEFAULT_PROFILE_ID__
	};
}

/**
 * Generate profile directory name based on Minecraft version and isolation setting
 */
export function getProfileDirectory(mcVersion: string, isolateProfile: boolean, profileDirectory: string, config: ModpackConfig): string | undefined {
	if (profileDirectory !== '') {
		return profileDirectory;
	}
	
	if (isolateProfile) {
		return `${config.defaultProfileId}-${mcVersion}`;
	}
	
	return undefined;
}

/**
 * Generate launcher profile ID based on configuration and isolation setting
 */
export function getProfileId(mcVersion: string, isolateProfile: boolean, config: ModpackConfig): string {
	if (isolateProfile) {
		return `${config.defaultProfileId}-${mcVersion}`;
	}
	
	return config.defaultProfileId;
}

/**
 * Generate launcher profile display name
 */
export function getProfileDisplayName(mcVersion: string, isolateProfile: boolean, config: ModpackConfig): string {
	if (isolateProfile) {
		return `${config.projectName} ${mcVersion}`;
	}
	
	return config.projectName;
}