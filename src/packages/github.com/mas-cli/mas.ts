/**
 * **mas** - :package: Mac App Store command line interface
 *
 * @domain `github.com/mas-cli/mas`
 * @programs `mas`
 * @version `2.3.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mas`
 * @name `mas`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mas
 * // Or access via domain
 * const samePkg = pantry.githubcommasclimas
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mas"
 * console.log(pkg.description) // ":package: Mac App Store command line interface"
 * console.log(pkg.programs)    // ["mas"]
 * console.log(pkg.versions[0]) // "2.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mas-cli/mas.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const masPackage = {
  /**
   * The display name of this package.
   */
  name: 'mas' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mas-cli/mas' as const,
  /**
   * Brief description of what this package does.
   */
  description: ':package: Mac App Store command line interface' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mas-cli/mas/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mas' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mas',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.0',
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '2.1.0',
    '2.0.0',
    '1.9.0',
    '1.8.8',
    '1.8.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mas -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mas' as const,
}

export type MasPackage = typeof masPackage
