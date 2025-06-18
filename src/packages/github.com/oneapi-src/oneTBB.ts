/**
 * **tbb** - oneAPI Threading Building Blocks (oneTBB)
 *
 * @domain `github.com/oneapi-src/oneTBB`
 * @version `2022.1.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/oneapi-src/oneTBB -- $SHELL -i`
 * @name `tbb`
 * @aliases `oneapi-src/oneTBB`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tbb
 * // Or access via domain
 * const samePkg = pantry.githubcomoneapisrconetbb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tbb"
 * console.log(pkg.description) // "oneAPI Threading Building Blocks (oneTBB)"
 * console.log(pkg.versions[0]) // "2022.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oneapi-src/oneTBB.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tbbPackage = {
  /**
   * The display name of this package.
   */
  name: 'tbb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oneapi-src/oneTBB' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'oneAPI Threading Building Blocks (oneTBB)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/oneapi-src/oneTBB/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/oneapi-src/oneTBB -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2022.1.0',
    '2022.0.0',
    '2021.13.0',
    '2021.12.0',
    '2021.11.0',
    '2021.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'oneapi-src/oneTBB',
  ] as const,
  fullPath: 'github.com/oneapi-src/oneTBB' as const,
}

export type TbbPackage = typeof tbbPackage
