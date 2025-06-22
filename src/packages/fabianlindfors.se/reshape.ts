/**
 * **reshape** - An easy-to-use, zero-downtime schema migration tool for Postgres
 *
 * @domain `fabianlindfors.se/reshape`
 * @programs `reshape`
 * @version `0.7.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install reshape`
 * @name `reshape`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.reshape
 * // Or access via domain
 * const samePkg = pantry.fabianlindforssereshape
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "reshape"
 * console.log(pkg.description) // "An easy-to-use, zero-downtime schema migration ..."
 * console.log(pkg.programs)    // ["reshape"]
 * console.log(pkg.versions[0]) // "0.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fabianlindfors-se/reshape.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const reshapePackage = {
  /**
   * The display name of this package.
   */
  name: 'reshape' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fabianlindfors.se/reshape' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An easy-to-use, zero-downtime schema migration tool for Postgres' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fabianlindfors.se/reshape/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install reshape' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'reshape',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) reshape -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install reshape' as const,
}

export type ReshapePackage = typeof reshapePackage
