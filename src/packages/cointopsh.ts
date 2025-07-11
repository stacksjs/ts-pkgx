/**
 * **cointop** - A fast and lightweight interactive terminal based UI application for tracking cryptocurrencies 🚀
 *
 * @domain `cointop.sh`
 * @programs `cointop`
 * @version `1.6.10` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cointop`
 * @name `cointop`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cointop
 * // Or access via domain
 * const samePkg = pantry.cointopsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cointop"
 * console.log(pkg.description) // "A fast and lightweight interactive terminal bas..."
 * console.log(pkg.programs)    // ["cointop"]
 * console.log(pkg.versions[0]) // "1.6.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cointop-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cointopPackage = {
  /**
   * The display name of this package.
   */
  name: 'cointop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cointop.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A fast and lightweight interactive terminal based UI application for tracking cryptocurrencies 🚀' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cointop.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cointop' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cointop',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cointop -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cointop' as const,
}

export type CointopPackage = typeof cointopPackage
