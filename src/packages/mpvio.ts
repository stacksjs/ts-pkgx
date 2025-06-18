/**
 * **mpv** - Media player based on MPlayer and mplayer2
 *
 * @domain `mpv.io`
 * @programs `mpv`
 * @version `0.40.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mpv`
 * @aliases `mpv`
 * @dependencies `ffmpeg.org`, `libjpeg-turbo.org@2`, `libarchive.org@3`, ... (+15 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mpv
 * // Or access via domain
 * const samePkg = pantry.mpvio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mpv.io"
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
  name: 'mpv.io' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
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
    'alsa-project.org/alsa-lib@1',
    'github.com/adah1972/libunibreak@6',
    'mesonbuild.com@1',
    'ninja-build.org@1',
    'git-scm.org@2',
    'invisible-island.net/ncurses@6',
    'nixos.org/patchelf@0',
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
  aliases: [
    'mpv',
  ] as const,
}

export type MpvPackage = typeof mpvPackage
