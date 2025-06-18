/**
 * **libsndfile/libsamplerate** - An audio Sample Rate Conversion library
 *
 * @domain `github.com/libsndfile/libsamplerate`
 * @version `0.2.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/libsndfile/libsamplerate -- $SHELL -i`
 * @aliases `libsndfile/libsamplerate`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libsndfilelibsamplerate
 * // Or access via domain
 * const samePkg = pantry.githubcomlibsndfilelibsamplerate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/libsndfile/libsamplerate"
 * console.log(pkg.description) // "An audio Sample Rate Conversion library"
 * console.log(pkg.versions[0]) // "0.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libsndfile/libsamplerate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsndfilelibsampleratePackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/libsndfile/libsamplerate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libsndfile/libsamplerate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An audio Sample Rate Conversion library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libsndfile/libsamplerate/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/libsndfile/libsamplerate -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libsndfile/libsamplerate',
  ] as const,
  fullPath: 'github.com/libsndfile/libsamplerate' as const,
}

export type LibsndfilelibsampleratePackage = typeof libsndfilelibsampleratePackage
