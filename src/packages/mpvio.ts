/**
 * **mpv** - Media player based on MPlayer and mplayer2
 *
 * @domain `mpv.io`
 * @programs `mpv`
 * @version `0.40.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mpv`
 * @name `mpv`
 * @dependencies `ffmpeg.org`, `libjpeg-turbo.org@2`, `libarchive.org@3`, ... (+10 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mpv
 * // Or access via domain
 * const samePkg = pantry.mpvio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mpv"
 * console.log(pkg.description) // "Media player based on MPlayer and mplayer2"
 * console.log(pkg.programs)    // ["mpv"]
 * console.log(pkg.versions[0]) // "0.40.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mpv-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpvPackage = {
  /**
   * The display name of this package.
   */
  name: 'mpv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mpv.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Media player based on MPlayer and mplayer2' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mpv.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/mpv-player/mpv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mpv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mpv',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.40.0',
    '0.39.0',
    '0.38.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mpv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mpv' as const,
}

export type MpvPackage = typeof mpvPackage
