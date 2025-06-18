/**
 * **ffmpeg.org** - Play, record, convert, and stream audio and video
 *
 * @domain `ffmpeg.org`
 * @programs `ffmpeg`, `ffplay`, `ffprobe`
 * @version `7.1.1` (24 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +ffmpeg.org -- $SHELL -i`
 * @dependencies `lame.sourceforge.io>=3.98.3`, `libsdl.org^2`, `freetype.org^2`, ... (+9 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ffmpegorg
 * console.log(pkg.name)        // "ffmpeg.org"
 * console.log(pkg.description) // "Play, record, convert, and stream audio and video"
 * console.log(pkg.programs)    // ["ffmpeg", "ffplay", ...]
 * console.log(pkg.versions[0]) // "7.1.1" (latest)
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
  description: 'Play, record, convert, and stream audio and video' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ffmpeg.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +ffmpeg.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ffmpeg',
    'ffplay',
    'ffprobe',
  ] as const,
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
    'nasm.us@2',
    'gnu.org/wget',
    'info-zip.org/unzip',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.1.1',
    '7.1.0',
    '7.0.2',
    '7.0.1',
    '7.0.0',
    '6.1.2',
    '6.1.1',
    '6.1.0',
    '6.0.1',
    '6.0.0',
    '5.1.6',
    '5.1.5',
    '5.1.4',
    '5.1.2',
    '4.4.6',
    '4.4.5',
    '4.3.9',
    '4.3.8',
    '4.3.7',
    '4.2.11',
    '4.2.10',
    '4.1.11',
    '3.4.14',
    '3.4.13',
  ] as const,
  aliases: [] as const,
}

export type FfmpegorgPackage = typeof ffmpegorgPackage
