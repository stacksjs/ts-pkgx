/**
 * **pebble** - Package from pantry: github.com/canonical/pebble
 *
 * @domain `github.com/canonical/pebble`
 *
 * @install `launchpad install github.com/canonical/pebble`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcanonicalpebble
 * console.log(pkg.name)        // "pebble"
 * console.log(pkg.description) // "Package from pantry: github.com/canonical/pebble"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/canonical/pebble.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcanonicalpebblePackage = {
  /**
   * The display name of this package.
   */
  name: 'pebble' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/canonical/pebble' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/canonical/pebble' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/canonical/pebble' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/canonical/pebble -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/canonical/pebble' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/canonical/pebble/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcanonicalpebblePackage = typeof githubcomcanonicalpebblePackage
