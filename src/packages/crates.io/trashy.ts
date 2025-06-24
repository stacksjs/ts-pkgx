/**
 * **trashy** - Package from pantry: crates.io/trashy
 *
 * @domain `crates.io/trashy`
 *
 * @install `launchpad install crates.io/trashy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiotrashy
 * console.log(pkg.name)        // "trashy"
 * console.log(pkg.description) // "Package from pantry: crates.io/trashy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/trashy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotrashyPackage = {
  /**
   * The display name of this package.
   */
  name: 'trashy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/trashy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/trashy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/trashy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/trashy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/trashy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/trashy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiotrashyPackage = typeof cratesiotrashyPackage
