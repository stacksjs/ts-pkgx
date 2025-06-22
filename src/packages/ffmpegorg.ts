/**
 * **ffmpeg.org** - Package from pantry: ffmpeg.org
 *
 * @domain `ffmpeg.org`
 *
 * @install `launchpad install ffmpeg.org`
 * @dependencies `lame.sourceforge.io>=3.98.3`, `libsdl.org^2`, `freetype.org^2`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ffmpegorg
 * console.log(pkg.name)        // "ffmpeg.org"
 * console.log(pkg.description) // "Package from pantry: ffmpeg.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ffmpeg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ffmpegorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ffmpeg.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ffmpeg.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ffmpeg.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ffmpeg.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ffmpeg.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ffmpeg.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'lame.sourceforge.io>=3.98.3',
    'libsdl.org^2',
    'freetype.org^2',
    'harfbuzz.org^8',
    'videolan.org/x264^0.164',
    'videolan.org/x265^3',
    'webmproject.org/libvpx^1',
    'opus-codec.org^1',
    'google.com/webp^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ffmpeg.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FfmpegorgPackage = typeof ffmpegorgPackage
