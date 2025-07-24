/**
 * **fsrx** - Package from pantry: crates.io/fsrx
 *
 * @domain `crates.io/fsrx`
 *
 * @install `launchpad install crates.io/fsrx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiofsrx
 * console.log(pkg.name)        // "fsrx"
 * console.log(pkg.description) // "Package from pantry: crates.io/fsrx"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fsrx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiofsrxPackage = {
  /**
   * The display name of this package.
   */
  name: 'fsrx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/fsrx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/fsrx' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/fsrx' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/fsrx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/fsrx' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fsrx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiofsrxPackage = typeof cratesiofsrxPackage
