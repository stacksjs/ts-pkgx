/**
 * **LibTomMath** - LibTomMath is a free open source portable number theoretic multiple-precision integer library written entirely in C.
 *
 * @domain `libtom.net/math`
 * @version `1.3.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +libtom.net/math -- $SHELL -i`
 * @aliases `LibTomMath`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.LibTomMath
 * // Or access via domain
 * const samePkg = pantry.libtomnetmath
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "math"
 * console.log(pkg.description) // "LibTomMath is a free open source portable numbe..."
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libtom-net/math.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libTomMathPackage = {
  /**
   * The display name of this package.
   */
  name: 'math' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libtom.net/math' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'LibTomMath is a free open source portable number theoretic multiple-precision integer library written entirely in C.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libtom.net/math/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +libtom.net/math -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
    '1.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'LibTomMath',
  ] as const,
}

export type LibTomMathPackage = typeof libTomMathPackage
