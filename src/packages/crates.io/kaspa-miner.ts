/**
 * **kaspa-miner** - Package from pantry: crates.io/kaspa-miner
 *
 * @domain `crates.io/kaspa-miner`
 *
 * @install `launchpad install crates.io/kaspa-miner`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiokaspaminer
 * console.log(pkg.name)        // "kaspa-miner"
 * console.log(pkg.description) // "Package from pantry: crates.io/kaspa-miner"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/kaspa-miner.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiokaspaminerPackage = {
  /**
   * The display name of this package.
   */
  name: 'kaspa-miner' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/kaspa-miner' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/kaspa-miner' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/kaspa-miner' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/kaspa-miner -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/kaspa-miner' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/kaspa-miner/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiokaspaminerPackage = typeof cratesiokaspaminerPackage
