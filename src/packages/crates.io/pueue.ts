/**
 * **pueue** - Command-line tool for managing long-running shell commands
 *
 * @domain `crates.io/pueue`
 * @programs `pueue`, `pueued`
 * @version `4.0.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pueue`
 * @name `pueue`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pueue
 * // Or access via domain
 * const samePkg = pantry.cratesiopueue
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pueue"
 * console.log(pkg.description) // "Command-line tool for managing long-running she..."
 * console.log(pkg.programs)    // ["pueue", "pueued"]
 * console.log(pkg.versions[0]) // "4.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pueue.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pueuePackage = {
  /**
   * The display name of this package.
   */
  name: 'pueue' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pueue' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line tool for managing long-running shell commands' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pueue/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pueue' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pueue',
    'pueued',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.0',
    '3.4.1',
    '3.4.0',
    '3.3.3',
    '3.3.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/pueue -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pueue' as const,
}

export type PueuePackage = typeof pueuePackage
