/**
 * **boost.org** - Package from pantry: boost.org
 *
 * @domain `boost.org`
 *
 * @install `launchpad install boost.org`
 * @dependencies `facebook.com/zstd^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.boostorg
 * console.log(pkg.name)        // "boost.org"
 * console.log(pkg.description) // "Package from pantry: boost.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/boost-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const boostorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'boost.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'boost.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: boost.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install boost.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +boost.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install boost.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'facebook.com/zstd^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/boost.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BoostorgPackage = typeof boostorgPackage
