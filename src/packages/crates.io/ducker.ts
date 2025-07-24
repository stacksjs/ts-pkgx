/**
 * **ducker** - Package from pantry: crates.io/ducker
 *
 * @domain `crates.io/ducker`
 *
 * @install `launchpad install crates.io/ducker`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioducker
 * console.log(pkg.name)        // "ducker"
 * console.log(pkg.description) // "Package from pantry: crates.io/ducker"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/ducker.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioduckerPackage = {
  /**
   * The display name of this package.
   */
  name: 'ducker' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/ducker' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/ducker' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/ducker' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/ducker -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/ducker' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ducker/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioduckerPackage = typeof cratesioduckerPackage
