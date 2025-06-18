/**
 * **mpv.io** - Package from pantry: mpv.io
 *
 * @domain `mpv.io`
 *
 * @install `launchpad install mpv.io`
 * @dependencies `ffmpeg.org`, `libjpeg-turbo.org^2`, `libarchive.org^3`, ... (+15 more)
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mpv.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ffmpeg.org',
    'libjpeg-turbo.org^2',
    'libarchive.org^3',
    'github.com/libass/libass^0.17',
    'videolan.org/libplacebo^6',
    'littlecms.com^2',
    'luajit.org^2',
    'mujs.com^1',
    'freedesktop.org/uchardet^0',
    'vapoursynth.com^66',
    'yt-dlp.org',
    'alsa-project.org/alsa-lib^1',
    'github.com/adah1972/libunibreak^6',
    'mesonbuild.com^1',
    'ninja-build.org^1',
    'git-scm.org^2',
    'invisible-island.net/ncurses^6',
    'nixos.org/patchelf^0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mpv.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MpvioPackage = typeof mpvioPackage
