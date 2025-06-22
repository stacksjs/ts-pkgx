/**
 * **names** - Package from pantry: crates.io/names
 *
 * @domain `crates.io/names`
 *
 * @install `launchpad install crates.io/names`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesionames
 * console.log(pkg.name)        // "names"
 * console.log(pkg.description) // "Package from pantry: crates.io/names"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/names.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesionamesPackage = {
  /**
   * The display name of this package.
   */
  name: 'names' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/names' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/names' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/names' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/names -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/names' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/names/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesionamesPackage = typeof cratesionamesPackage
