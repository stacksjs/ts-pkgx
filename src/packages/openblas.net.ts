/**
 * **+openblas.net -- $SHELL -i** - OpenBLAS is an optimized BLAS library based on GotoBLAS2 1.13 BSD version.
 *
 * @domain `openblas.net`
 * @version `0.3.29` (7 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/openblas-net.md
 *
 * @install `sh <(curl https://pkgx.sh) +openblas.net -- $SHELL -i`
 * @aliases `+openblas.net -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.openblasnetSHELLi
 * // Or access via domain
 * const samePkg = pantry.openblasnet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openblas.net"
 * console.log(pkg.description) // "OpenBLAS is an optimized BLAS library based on ..."
 * console.log(pkg.versions[0]) // "0.3.29" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openblas-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openblasnetSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'openblas.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openblas.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'OpenBLAS is an optimized BLAS library based on GotoBLAS2 1.13 BSD version.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openblas.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +openblas.net -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.29',
    '0.3.28',
    '0.3.27',
    '0.3.26',
    '0.3.25',
    '0.3.24',
    '0.3.23',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+openblas.net -- $SHELL -i',
  ] as const,
  fullPath: 'openblas.net' as const,
}

export type OpenblasnetSHELLiPackage = typeof openblasnetSHELLiPackage
