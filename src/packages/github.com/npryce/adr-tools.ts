/**
 * **adr** - Command-line tools for working with Architecture Decision Records
 *
 * @domain `github.com/npryce/adr-tools`
 * @programs `adr`
 * @version `3.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install adr`
 * @name `adr`
 * @dependencies `gnu.org/bash`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.adr
 * // Or access via domain
 * const samePkg = pantry.githubcomnpryceadrtools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "adr"
 * console.log(pkg.description) // "Command-line tools for working with Architectur..."
 * console.log(pkg.programs)    // ["adr"]
 * console.log(pkg.versions[0]) // "3.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/npryce/adr-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const adrPackage = {
  /**
   * The display name of this package.
   */
  name: 'adr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/npryce/adr-tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line tools for working with Architecture Decision Records' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/npryce/adr-tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install adr' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'adr',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/bash',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) adr -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install adr' as const,
}

export type AdrPackage = typeof adrPackage
