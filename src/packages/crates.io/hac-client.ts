/**
 * **hac-client** - Package from pantry: crates.io/hac-client
 *
 * @domain `crates.io/hac-client`
 *
 * @install `launchpad install crates.io/hac-client`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiohacclient
 * console.log(pkg.name)        // "hac-client"
 * console.log(pkg.description) // "Package from pantry: crates.io/hac-client"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/hac-client.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiohacclientPackage = {
  /**
   * The display name of this package.
   */
  name: 'hac-client' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/hac-client' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/hac-client' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/hac-client' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/hac-client -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/hac-client' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/hac-client/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiohacclientPackage = typeof cratesiohacclientPackage
