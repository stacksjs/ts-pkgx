/**
 * **xh** - Friendly and fast tool for sending HTTP requests
 *
 * @domain `crates.io/xh`
 * @programs `xh`
 * @version `0.24.1` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) xh`
 * @name `xh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xh
 * // Or access via domain
 * const samePkg = pantry.cratesioxh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xh"
 * console.log(pkg.description) // "Friendly and fast tool for sending HTTP requests"
 * console.log(pkg.programs)    // ["xh"]
 * console.log(pkg.versions[0]) // "0.24.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/xh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xhPackage = {
  /**
   * The display name of this package.
   */
  name: 'xh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/xh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Friendly and fast tool for sending HTTP requests' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/xh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) xh' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xh',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.24.1',
    '0.24.0',
    '0.23.1',
    '0.23.0',
    '0.22.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/xh' as const,
}

export type XhPackage = typeof xhPackage
