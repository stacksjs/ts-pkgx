/**
 * **csview** - Package from pantry: crates.io/csview
 *
 * @domain `crates.io/csview`
 *
 * @install `launchpad install crates.io/csview`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiocsview
 * console.log(pkg.name)        // "csview"
 * console.log(pkg.description) // "Package from pantry: crates.io/csview"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/csview.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiocsviewPackage = {
  /**
   * The display name of this package.
   */
  name: 'csview' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/csview' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/csview' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/csview' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/csview -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/csview' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/csview/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiocsviewPackage = typeof cratesiocsviewPackage
