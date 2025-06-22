/**
 * **huniq** - Package from pantry: crates.io/huniq
 *
 * @domain `crates.io/huniq`
 *
 * @install `launchpad install crates.io/huniq`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiohuniq
 * console.log(pkg.name)        // "huniq"
 * console.log(pkg.description) // "Package from pantry: crates.io/huniq"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/huniq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiohuniqPackage = {
  /**
   * The display name of this package.
   */
  name: 'huniq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/huniq' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/huniq' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/huniq' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/huniq -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/huniq' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/huniq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiohuniqPackage = typeof cratesiohuniqPackage
