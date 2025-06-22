/**
 * **hyperfine** - Package from pantry: crates.io/hyperfine
 *
 * @domain `crates.io/hyperfine`
 *
 * @install `launchpad install crates.io/hyperfine`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiohyperfine
 * console.log(pkg.name)        // "hyperfine"
 * console.log(pkg.description) // "Package from pantry: crates.io/hyperfine"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/hyperfine.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiohyperfinePackage = {
  /**
   * The display name of this package.
   */
  name: 'hyperfine' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/hyperfine' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/hyperfine' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/hyperfine' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/hyperfine -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/hyperfine' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/hyperfine/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiohyperfinePackage = typeof cratesiohyperfinePackage
