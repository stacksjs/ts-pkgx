/**
 * **skim** - Package from pantry: crates.io/skim
 *
 * @domain `crates.io/skim`
 *
 * @install `launchpad install crates.io/skim`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioskim
 * console.log(pkg.name)        // "skim"
 * console.log(pkg.description) // "Package from pantry: crates.io/skim"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/skim.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioskimPackage = {
  /**
   * The display name of this package.
   */
  name: 'skim' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/skim' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/skim' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/skim' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/skim -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/skim' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/skim/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioskimPackage = typeof cratesioskimPackage
