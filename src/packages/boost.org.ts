/**
 * **+boost.org -- $SHELL -i** - Super-project for modularized Boost
 *
 * @domain `boost.org`
 * @version `1.88.0` (8 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/boost-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +boost.org -- $SHELL -i`
 * @aliases `+boost.org -- $SHELL -i`
 * @dependencies `facebook.com/zstd^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.boostorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.boostorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "boost.org"
 * console.log(pkg.description) // "Super-project for modularized Boost"
 * console.log(pkg.versions[0]) // "1.88.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/boost-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const boostorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'boost.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'boost.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Super-project for modularized Boost' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/boost.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +boost.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'facebook.com/zstd^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.88.0',
    '1.87.0',
    '1.86.0',
    '1.85.0',
    '1.84.0',
    '1.83.0',
    '1.82.0',
    '1.81.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+boost.org -- $SHELL -i',
  ] as const,
  fullPath: 'boost.org' as const,
}

export type BoostorgSHELLiPackage = typeof boostorgSHELLiPackage
