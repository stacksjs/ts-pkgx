/**
 * **optipng** - PNG file optimizer
 *
 * @domain `sf.net/optipng`
 * @programs `optipng`
 * @version `7.9.1` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/sf-net/optipng.md
 *
 * @install `sh <(curl https://pkgx.sh) optipng`
 * @name `optipng`
 * @dependencies `libpng.org^1`, `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.optipng
 * // Or access via domain
 * const samePkg = pantry.sfnetoptipng
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "optipng"
 * console.log(pkg.description) // "PNG file optimizer"
 * console.log(pkg.programs)    // ["optipng"]
 * console.log(pkg.versions[0]) // "7.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sf-net/optipng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const optipngPackage = {
  /**
   * The display name of this package.
   */
  name: 'optipng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sf.net/optipng' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'PNG file optimizer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sf.net/optipng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) optipng' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'optipng',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org^1',
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.9.1',
    '0.7.8',
    '0.7.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'sf.net/optipng' as const,
}

export type OptipngPackage = typeof optipngPackage
