/**
 * **omekasy** - Package from pantry: crates.io/omekasy
 *
 * @domain `crates.io/omekasy`
 *
 * @install `launchpad install crates.io/omekasy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioomekasy
 * console.log(pkg.name)        // "omekasy"
 * console.log(pkg.description) // "Package from pantry: crates.io/omekasy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/omekasy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioomekasyPackage = {
  /**
   * The display name of this package.
   */
  name: 'omekasy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/omekasy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/omekasy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/omekasy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/omekasy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/omekasy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/omekasy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioomekasyPackage = typeof cratesioomekasyPackage
