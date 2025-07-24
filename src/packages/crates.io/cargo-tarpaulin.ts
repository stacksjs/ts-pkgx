/**
 * **cargo-tarpaulin** - Package from pantry: crates.io/cargo-tarpaulin
 *
 * @domain `crates.io/cargo-tarpaulin`
 *
 * @install `launchpad install crates.io/cargo-tarpaulin`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiocargotarpaulin
 * console.log(pkg.name)        // "cargo-tarpaulin"
 * console.log(pkg.description) // "Package from pantry: crates.io/cargo-tarpaulin"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/cargo-tarpaulin.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiocargotarpaulinPackage = {
  /**
   * The display name of this package.
   */
  name: 'cargo-tarpaulin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/cargo-tarpaulin' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/cargo-tarpaulin' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/cargo-tarpaulin' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/cargo-tarpaulin -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/cargo-tarpaulin' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/cargo-tarpaulin/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiocargotarpaulinPackage = typeof cratesiocargotarpaulinPackage
