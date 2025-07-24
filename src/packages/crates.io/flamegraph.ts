/**
 * **flamegraph** - Package from pantry: crates.io/flamegraph
 *
 * @domain `crates.io/flamegraph`
 *
 * @install `launchpad install crates.io/flamegraph`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioflamegraph
 * console.log(pkg.name)        // "flamegraph"
 * console.log(pkg.description) // "Package from pantry: crates.io/flamegraph"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/flamegraph.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioflamegraphPackage = {
  /**
   * The display name of this package.
   */
  name: 'flamegraph' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/flamegraph' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/flamegraph' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/flamegraph' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/flamegraph -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/flamegraph' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/flamegraph/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioflamegraphPackage = typeof cratesioflamegraphPackage
