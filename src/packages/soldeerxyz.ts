/**
 * **soldeer** - Solidity Package Manager written in rust and integrated into Foundry (forge soldeer ...)
 *
 * @domain `soldeer.xyz`
 * @programs `soldeer`
 * @version `0.6.1` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install soldeer`
 * @name `soldeer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.soldeer
 * // Or access via domain
 * const samePkg = pantry.soldeerxyz
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "soldeer"
 * console.log(pkg.description) // "Solidity Package Manager written in rust and in..."
 * console.log(pkg.programs)    // ["soldeer"]
 * console.log(pkg.versions[0]) // "0.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/soldeer-xyz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const soldeerPackage = {
  /**
   * The display name of this package.
   */
  name: 'soldeer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'soldeer.xyz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Solidity Package Manager written in rust and integrated into Foundry (forge soldeer ...)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/soldeer.xyz/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install soldeer' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'soldeer',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.1',
    '0.6.0',
    '0.5.4',
    '0.5.3',
    '0.5.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) soldeer -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install soldeer' as const,
}

export type SoldeerPackage = typeof soldeerPackage
