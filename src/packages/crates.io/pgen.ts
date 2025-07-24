/**
 * **pgen** - Package from pantry: crates.io/pgen
 *
 * @domain `crates.io/pgen`
 *
 * @install `launchpad install crates.io/pgen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiopgen
 * console.log(pkg.name)        // "pgen"
 * console.log(pkg.description) // "Package from pantry: crates.io/pgen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiopgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'pgen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/pgen' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/pgen' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/pgen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/pgen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pgen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiopgenPackage = typeof cratesiopgenPackage
