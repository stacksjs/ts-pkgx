/**
 * **spin** - Package from pantry: fermyon.com/spin
 *
 * @domain `fermyon.com/spin`
 *
 * @install `launchpad install fermyon.com/spin`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fermyoncomspin
 * console.log(pkg.name)        // "spin"
 * console.log(pkg.description) // "Package from pantry: fermyon.com/spin"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fermyon-com/spin.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fermyoncomspinPackage = {
  /**
   * The display name of this package.
   */
  name: 'spin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fermyon.com/spin' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fermyon.com/spin' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fermyon.com/spin' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fermyon.com/spin -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fermyon.com/spin' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fermyon.com/spin/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FermyoncomspinPackage = typeof fermyoncomspinPackage
