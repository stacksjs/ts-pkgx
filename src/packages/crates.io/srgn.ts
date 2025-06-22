/**
 * **srgn** - Package from pantry: crates.io/srgn
 *
 * @domain `crates.io/srgn`
 *
 * @install `launchpad install crates.io/srgn`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosrgn
 * console.log(pkg.name)        // "srgn"
 * console.log(pkg.description) // "Package from pantry: crates.io/srgn"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/srgn.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosrgnPackage = {
  /**
   * The display name of this package.
   */
  name: 'srgn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/srgn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/srgn' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/srgn' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/srgn -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/srgn' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/srgn/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiosrgnPackage = typeof cratesiosrgnPackage
