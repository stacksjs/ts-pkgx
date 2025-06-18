/**
 * **flac** - Free Lossless Audio Codec
 *
 * @domain `xiph.org/flac`
 * @programs `flac`
 * @version `1.5.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) flac`
 * @name `flac`
 * @dependencies `xiph.org/ogg^1.3.5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.flac
 * // Or access via domain
 * const samePkg = pantry.xiphorgflac
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "flac"
 * console.log(pkg.description) // "Free Lossless Audio Codec"
 * console.log(pkg.programs)    // ["flac"]
 * console.log(pkg.versions[0]) // "1.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xiph-org/flac.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flacPackage = {
  /**
   * The display name of this package.
   */
  name: 'flac' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xiph.org/flac' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Free Lossless Audio Codec' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xiph.org/flac/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) flac' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'flac',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/ogg^1.3.5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.0',
    '1.4.3',
    '1.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'xiph.org/flac' as const,
}

export type FlacPackage = typeof flacPackage
