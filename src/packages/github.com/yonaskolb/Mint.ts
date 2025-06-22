/**
 * **mint** - Dependency manager that installs and runs Swift command-line tool packages
 *
 * @domain `github.com/yonaskolb/Mint`
 * @programs `mint`
 * @version `0.18.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mint`
 * @name `mint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mint
 * // Or access via domain
 * const samePkg = pantry.githubcomyonaskolbmint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mint"
 * console.log(pkg.description) // "Dependency manager that installs and runs Swift..."
 * console.log(pkg.programs)    // ["mint"]
 * console.log(pkg.versions[0]) // "0.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/yonaskolb/Mint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mintPackage = {
  /**
   * The display name of this package.
   */
  name: 'mint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/yonaskolb/Mint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Dependency manager that installs and runs Swift command-line tool packages' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/yonaskolb/Mint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/yonaskolb/Mint' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mint' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mint',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.18.0',
    '0.17.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mint' as const,
}

export type MintPackage = typeof mintPackage
