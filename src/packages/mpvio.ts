/**
 * **mpv.io** - Package from pantry: mpv.io
 *
 * @domain `mpv.io`
 *
 * @install `launchpad install mpv.io`
 * @dependencies `ffmpeg.org`, `libjpeg-turbo.org@2`, `libarchive.org@3`, ... (+10 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mpvio
 * console.log(pkg.name)        // "mpv.io"
 * console.log(pkg.description) // "Package from pantry: mpv.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mpv-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpvioPackage = {
  /**
   * The display name of this package.
   */
  name: 'mpv.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mpv.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mpv.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mpv.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mpv.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mpv.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'ffmpeg.org',
    'libjpeg-turbo.org@2',
    'libarchive.org@3',
    'github.com/libass/libass^0.17',
    'videolan.org/libplacebo@6',
    'littlecms.com@2',
    'luajit.org@2',
    'mujs.com@1',
    'freedesktop.org/uchardet@0',
    'vapoursynth.com@66',
    'yt-dlp.org',
    'linux:alsa-project.org/alsa-lib@1',
    'linux:github.com/adah1972/libunibreak@6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mpv.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MpvioPackage = typeof mpvioPackage
