/**
 * **dhall** - Interpreter for the Dhall language
 *
 * @domain `dhall-lang.org`
 * @programs `dhall`
 * @version `1.42.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dhall`
 * @name `dhall`
 * @dependencies `invisible-island.net/ncurses^6.4`, `zlib.net^1.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dhall
 * // Or access via domain
 * const samePkg = pantry.dhalllangorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dhall"
 * console.log(pkg.description) // "Interpreter for the Dhall language"
 * console.log(pkg.programs)    // ["dhall"]
 * console.log(pkg.versions[0]) // "1.42.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dhall-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dhallPackage = {
  /**
   * The display name of this package.
   */
  name: 'dhall' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dhall-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Interpreter for the Dhall language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dhall-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dhall' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dhall',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses^6.4',
    'zlib.net^1.3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.42.2',
    '1.42.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) dhall -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dhall' as const,
}

export type DhallPackage = typeof dhallPackage
