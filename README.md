## Modpackinstaller

A generic fork of [Fabulously-Optimized/installer](https://github.com/Fabulously-Optimized/installer) which allows the installation of arbitrary modpacks on buildtime

### Configuring
Add environment variables
```pwsh
$env:VITE_PROJECT_ID="your-project-id"
$env:VITE_PROJECT_NAME="Your Modpack Name"
$env:VITE_DEFAULT_PROFILE_ID="Launcher Profile ID"
```
Build
```pwsh
npm run build
npm run tauri build
```
Run (from project root)
```pwsh
cd src-tauri\target\release\
.\"modpackinstaller.exe"
```