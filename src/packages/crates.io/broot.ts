/**
 * **broot** - Package from pantry: crates.io/broot
 *
 * @domain `crates.io/broot`
 *
 * @install `launchpad install crates.io/broot`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiobroot
 * console.log(pkg.name)        // "broot"
 * console.log(pkg.description) // "Package from pantry: crates.io/broot"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/broot.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiobrootPackage = {
  /**
   * The display name of this package.
   */
  name: 'broot' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/broot' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/broot' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/broot' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/broot -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/broot' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/broot/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiobrootPackage = typeof cratesiobrootPackage
