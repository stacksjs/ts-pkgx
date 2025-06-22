/**
 * **xcparse** - Command line tool & Swift framework for parsing Xcode 11+ xcresult
 *
 * @domain `github.com/ChargePoint/xcparse`
 * @programs `xcparse`
 * @version `2.3.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xcparse`
 * @name `xcparse`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xcparse
 * // Or access via domain
 * const samePkg = pantry.githubcomchargepointxcparse
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xcparse"
 * console.log(pkg.description) // "Command line tool & Swift framework for parsing..."
 * console.log(pkg.programs)    // ["xcparse"]
 * console.log(pkg.versions[0]) // "2.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ChargePoint/xcparse.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcparsePackage = {
  /**
   * The display name of this package.
   */
  name: 'xcparse' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ChargePoint/xcparse' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command line tool & Swift framework for parsing Xcode 11+ xcresult' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ChargePoint/xcparse/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xcparse' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xcparse',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.2',
    '2.3.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) xcparse -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install xcparse' as const,
}

export type XcparsePackage = typeof xcparsePackage
