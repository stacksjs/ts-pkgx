/**
 * **bake-rs** - Package from pantry: crates.io/bake-rs
 *
 * @domain `crates.io/bake-rs`
 *
 * @install `launchpad install crates.io/bake-rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiobakers
 * console.log(pkg.name)        // "bake-rs"
 * console.log(pkg.description) // "Package from pantry: crates.io/bake-rs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/bake-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiobakersPackage = {
  /**
   * The display name of this package.
   */
  name: 'bake-rs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/bake-rs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/bake-rs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/bake-rs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/bake-rs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/bake-rs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/bake-rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiobakersPackage = typeof cratesiobakersPackage
