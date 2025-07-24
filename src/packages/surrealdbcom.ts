/**
 * **surreal** - A scalable, distributed, collaborative, document-graph database, for the realtime web
 *
 * @domain `surrealdb.com`
 * @programs `surreal`
 * @version `2023.9.1` (52 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install surreal`
 * @name `surreal`
 * @dependencies `openssl.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.surreal
 * // Or access via domain
 * const samePkg = pantry.surrealdbcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "surreal"
 * console.log(pkg.description) // "A scalable, distributed, collaborative, documen..."
 * console.log(pkg.programs)    // ["surreal"]
 * console.log(pkg.versions[0]) // "2023.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/surrealdb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const surrealPackage = {
  /**
   * The display name of this package.
   */
  name: 'surreal' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'surrealdb.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A scalable, distributed, collaborative, document-graph database, for the realtime web' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/surrealdb.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install surreal' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'surreal',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.9.1',
    '2.3.7',
    '2.3.6',
    '2.3.5',
    '2.3.4',
    '2.3.3',
    '2.3.2',
    '2.3.1',
    '2.3.0',
    '2.2.7',
    '2.2.6',
    '2.2.5',
    '2.2.4',
    '2.2.3',
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '2.1.8',
    '2.1.7',
    '2.1.6',
    '2.1.5',
    '2.1.4',
    '2.1.3',
    '2.1.2',
    '2.1.1',
    '2.1.0',
    '2.0.5',
    '2.0.4',
    '2.0.3',
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.5.6',
    '1.5.5',
    '1.5.4',
    '1.5.3',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.2',
    '1.4.0',
    '1.3.1',
    '1.3.0',
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.1',
    '1.1.0',
    '1.0.2',
    '1.0.1',
    '1.0.0',
    '0.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) surreal -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install surreal' as const,
}

export type SurrealPackage = typeof surrealPackage
