/**
 * **go-mod-upgrade** - Update outdated Go dependencies interactively
 *
 * @domain `github.com/oligot/go-mod-upgrade`
 * @programs `go-mod-upgrade`
 * @version `0.11.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install go-mod-upgrade`
 * @name `go-mod-upgrade`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gomodupgrade
 * // Or access via domain
 * const samePkg = pantry.githubcomoligotgomodupgrade
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "go-mod-upgrade"
 * console.log(pkg.description) // "Update outdated Go dependencies interactively"
 * console.log(pkg.programs)    // ["go-mod-upgrade"]
 * console.log(pkg.versions[0]) // "0.11.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oligot/go-mod-upgrade.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gomodupgradePackage = {
  /**
   * The display name of this package.
   */
  name: 'go-mod-upgrade' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oligot/go-mod-upgrade' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Update outdated Go dependencies interactively' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/oligot/go-mod-upgrade/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install go-mod-upgrade' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'go-mod-upgrade',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.11.0',
    '0.10.0',
    '0.9.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) go-mod-upgrade -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install go-mod-upgrade' as const,
}

export type GomodupgradePackage = typeof gomodupgradePackage
