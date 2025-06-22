/**
 * **cowsay** - apjanke's fork of the classic cowsay project
 *
 * @domain `github.com/cowsay-org/cowsay`
 * @programs `cowsay`
 * @version `3.8.4` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cowsay`
 * @name `cowsay`
 * @dependencies `perl.org^5`
 * @companions `PERL5LIB^{{prefix}}/lib/perl5:$PERL5LIB`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cowsay
 * // Or access via domain
 * const samePkg = pantry.githubcomcowsayorgcowsay
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cowsay"
 * console.log(pkg.description) // "apjanke's fork of the classic cowsay project"
 * console.log(pkg.programs)    // ["cowsay"]
 * console.log(pkg.versions[0]) // "3.8.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cowsay-org/cowsay.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cowsayPackage = {
  /**
   * The display name of this package.
   */
  name: 'cowsay' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cowsay-org/cowsay' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'apjanke\'s fork of the classic cowsay project' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cowsay-org/cowsay/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cowsay' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cowsay',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'PERL5LIB^{{prefix}}/lib/perl5:$PERL5LIB',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org^5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.8.4',
    '3.8.3',
    '3.8.2',
    '3.8.1',
    '3.8.0',
    '3.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cowsay -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cowsay' as const,
}

export type CowsayPackage = typeof cowsayPackage
