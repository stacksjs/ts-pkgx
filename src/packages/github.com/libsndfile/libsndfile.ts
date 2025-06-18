/**
 * **sndfile** - A C library for reading and writing sound files containing sampled audio data.
 *
 * @domain `github.com/libsndfile/libsndfile`
 * @programs `sndfile-info`, `sndfile-convert`, `sndfile-play`
 * @version `1.2.2` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/libsndfile/libsndfile -- $SHELL -i`
 * @name `sndfile`
 * @aliases `libsndfile/libsndfile`
 * @dependencies `xiph.org/flac`, `lame.sourceforge.io`, `xiph.org/ogg`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sndfile
 * // Or access via domain
 * const samePkg = pantry.githubcomlibsndfilelibsndfile
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sndfile"
 * console.log(pkg.description) // "A C library for reading and writing sound files..."
 * console.log(pkg.programs)    // ["sndfile-info", "sndfile-convert", ...]
 * console.log(pkg.versions[0]) // "1.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libsndfile/libsndfile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sndfilePackage = {
  /**
   * The display name of this package.
   */
  name: 'sndfile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libsndfile/libsndfile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A C library for reading and writing sound files containing sampled audio data.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libsndfile/libsndfile/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/libsndfile/libsndfile -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sndfile-info',
    'sndfile-convert',
    'sndfile-play',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/flac',
    'lame.sourceforge.io',
    'xiph.org/ogg',
    'xiph.org/vorbis',
    'mpg123.de',
    'opus-codec.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.2',
    '1.2.1',
    '1.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libsndfile/libsndfile',
  ] as const,
  fullPath: 'github.com/libsndfile/libsndfile' as const,
}

export type SndfilePackage = typeof sndfilePackage
