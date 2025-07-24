/**
 * **dgraph** - high-performance graph database for real-time use cases
 *
 * @domain `dgraph.io`
 * @programs `dgraph`
 * @version `24.1.3` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dgraph`
 * @name `dgraph`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dgraph
 * // Or access via domain
 * const samePkg = pantry.dgraphio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dgraph"
 * console.log(pkg.description) // "high-performance graph database for real-time u..."
 * console.log(pkg.programs)    // ["dgraph"]
 * console.log(pkg.versions[0]) // "24.1.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dgraph-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dgraphPackage = {
  /**
   * The display name of this package.
   */
  name: 'dgraph' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dgraph.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'high-performance graph database for real-time use cases' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dgraph.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dgraph' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dgraph',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '24.1.3',
    '24.1.2',
    '24.1.1',
    '24.1.0',
    '24.0.5',
    '24.0.4',
    '24.0.2',
    '24.0.1',
    '24.0.0',
    '23.1.1',
    '23.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) dgraph -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dgraph' as const,
}

export type DgraphPackage = typeof dgraphPackage
