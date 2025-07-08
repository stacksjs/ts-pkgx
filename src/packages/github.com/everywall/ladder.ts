/**
 * **ladder** - Selfhosted alternative to 12ft.io. and 1ft.io bypass paywalls with a proxy ladder and remove CORS headers from any URL
 *
 * @domain `github.com/everywall/ladder`
 * @programs `ladder`
 * @version `0.0.21` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ladder`
 * @name `ladder`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ladder
 * // Or access via domain
 * const samePkg = pantry.githubcomeverywallladder
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ladder"
 * console.log(pkg.description) // "Selfhosted alternative to 12ft.io. and 1ft.io b..."
 * console.log(pkg.programs)    // ["ladder"]
 * console.log(pkg.versions[0]) // "0.0.21" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/everywall/ladder.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ladderPackage = {
  /**
   * The display name of this package.
   */
  name: 'ladder' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/everywall/ladder' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Selfhosted alternative to 12ft.io. and 1ft.io bypass paywalls with a proxy ladder and remove CORS headers from any URL' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/everywall/ladder/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ladder' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ladder',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.21',
    '0.0.20',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ladder -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ladder' as const,
}

export type LadderPackage = typeof ladderPackage
