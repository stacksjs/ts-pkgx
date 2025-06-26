/**
 * **iroh.computer** - Package from pantry: iroh.computer
 *
 * @domain `iroh.computer`
 *
 * @install `launchpad install iroh.computer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.irohcomputer
 * console.log(pkg.name)        // "iroh.computer"
 * console.log(pkg.description) // "Package from pantry: iroh.computer"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/iroh-computer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const irohcomputerPackage = {
  /**
   * The display name of this package.
   */
  name: 'iroh.computer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'iroh.computer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: iroh.computer' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install iroh.computer' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +iroh.computer -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install iroh.computer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/iroh.computer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type IrohcomputerPackage = typeof irohcomputerPackage
