/**
 * **pik** - Package from pantry: crates.io/pik
 *
 * @domain `crates.io/pik`
 *
 * @install `launchpad install crates.io/pik`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiopik
 * console.log(pkg.name)        // "pik"
 * console.log(pkg.description) // "Package from pantry: crates.io/pik"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pik.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiopikPackage = {
  /**
   * The display name of this package.
   */
  name: 'pik' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pik' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/pik' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/pik' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/pik -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/pik' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pik/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiopikPackage = typeof cratesiopikPackage
