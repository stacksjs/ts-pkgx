/**
 * **glog** - C++ implementation of the Google logging module
 *
 * @domain `google.com/glog`
 * @version `0.7.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +google.com/glog -- $SHELL -i`
 * @aliases `glog`
 * @dependencies `gflags.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.glog
 * // Or access via domain
 * const samePkg = pantry.googlecomglog
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "google.com/glog"
 * console.log(pkg.description) // "C++ implementation of the Google logging module"
 * console.log(pkg.versions[0]) // "0.7.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/glog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glogPackage = {
  /**
   * The display name of this package.
   */
  name: 'google.com/glog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/glog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C++ implementation of the Google logging module' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/glog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +google.com/glog -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gflags.github.io',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.1',
    '0.7.0',
    '0.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'glog',
  ] as const,
  fullPath: 'google.com/glog' as const,
}

export type GlogPackage = typeof glogPackage
