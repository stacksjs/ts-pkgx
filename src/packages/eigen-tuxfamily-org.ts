/**
 * **eigen.tuxfamily.org** - pkgx package
 *
 * @domain `eigen.tuxfamily.org`
 * @version `3.4.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +eigen.tuxfamily.org -- $SHELL -i`
 * @dependencies `linuxgnu.org/gcc/libstdcxx@14`, `gnu.org/gcc/libstdcxx@14`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.eigentuxfamilyorg
 * console.log(pkg.name)        // "eigen.tuxfamily.org"
 * console.log(pkg.versions[0]) // "3.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/eigen-tuxfamily-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eigentuxfamilyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'eigen.tuxfamily.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'eigen.tuxfamily.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/eigen.tuxfamily.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +eigen.tuxfamily.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxgnu.org/gcc/libstdcxx@14',
    'gnu.org/gcc/libstdcxx@14',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'eigen.tuxfamily.org' as const,
}

export type EigentuxfamilyorgPackage = typeof eigentuxfamilyorgPackage
