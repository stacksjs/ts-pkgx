/**
 * **argc** - Package from pantry: crates.io/argc
 *
 * @domain `crates.io/argc`
 *
 * @install `launchpad install crates.io/argc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioargc
 * console.log(pkg.name)        // "argc"
 * console.log(pkg.description) // "Package from pantry: crates.io/argc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/argc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioargcPackage = {
  /**
   * The display name of this package.
   */
  name: 'argc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/argc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/argc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/argc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/argc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/argc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/argc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioargcPackage = typeof cratesioargcPackage
