/**
 * **boost.org** - Super-project for modularized Boost
 *
 * @domain `boost.org`
 * @version `1.88.0` (8 versions available)
 * @versions From newest version to oldest.
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
 * console.log(pkg.description) // "Super-project for modularized Boost"
 * console.log(pkg.versions[0]) // "1.88.0" (latest)
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
  description: 'Super-project for modularized Boost' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/boost.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install boost.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'facebook.com/zstd^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.88.0',
    '1.87.0',
    '1.86.0',
    '1.85.0',
    '1.84.0',
    '1.83.0',
    '1.82.0',
    '1.81.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +boost.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install boost.org' as const,
}

export type BoostorgPackage = typeof boostorgPackage
