/**
 * **+networkx.org -- $SHELL -i** - Network Analysis in Python
 *
 * @domain `networkx.org`
 * @version `3.5.0` (6 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/networkx-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +networkx.org -- $SHELL -i`
 * @aliases `+networkx.org -- $SHELL -i`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.networkxorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.networkxorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "networkx.org"
 * console.log(pkg.description) // "Network Analysis in Python"
 * console.log(pkg.versions[0]) // "3.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/networkx-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const networkxorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'networkx.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'networkx.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Network Analysis in Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/networkx.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +networkx.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.0',
    '3.4.2',
    '3.4.1',
    '3.4.0',
    '3.3.0',
    '3.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+networkx.org -- $SHELL -i',
  ] as const,
  fullPath: 'networkx.org' as const,
}

export type NetworkxorgSHELLiPackage = typeof networkxorgSHELLiPackage
