/**
 * **shovel** - An Ethereum to Postgres indexer
 *
 * @domain `indexsupply.com/shovel`
 * @programs `shovel`
 * @version `1.6.0` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) shovel`
 * @name `shovel`
 * @companions `postgresql.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.shovel
 * // Or access via domain
 * const samePkg = pantry.indexsupplycomshovel
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "shovel"
 * console.log(pkg.description) // "An Ethereum to Postgres indexer"
 * console.log(pkg.programs)    // ["shovel"]
 * console.log(pkg.versions[0]) // "1.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/indexsupply-com/shovel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const shovelPackage = {
  /**
   * The display name of this package.
   */
  name: 'shovel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'indexsupply.com/shovel' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An Ethereum to Postgres indexer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/indexsupply.com/shovel/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) shovel' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'shovel',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'postgresql.org',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.0',
    '1.5.0',
    '1.4.0',
    '1.3.0',
    '1.2.0',
    '1.1.0',
    '1.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'indexsupply.com/shovel' as const,
}

export type ShovelPackage = typeof shovelPackage
