/**
 * **lapack** - LAPACK development repository
 *
 * @domain `netlib.org/lapack`
 * @version `3.12.1` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/netlib-org/lapack.md
 *
 * @install `sh <(curl https://pkgx.sh) +netlib.org/lapack -- $SHELL -i`
 * @aliases `lapack`
 * @dependencies `gnu.org/gcc^11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.lapack
 * // Or access via domain
 * const samePkg = pantry.netliborglapack
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "netlib.org/lapack"
 * console.log(pkg.description) // "LAPACK development repository"
 * console.log(pkg.versions[0]) // "3.12.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/netlib-org/lapack.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lapackPackage = {
  /**
   * The display name of this package.
   */
  name: 'netlib.org/lapack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'netlib.org/lapack' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'LAPACK development repository' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/netlib.org/lapack/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +netlib.org/lapack -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gcc^11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.12.1',
    '3.12.0',
    '3.11.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'lapack',
  ] as const,
  fullPath: 'netlib.org/lapack' as const,
}

export type LapackPackage = typeof lapackPackage
