/**
 * **vivid** - Generator for LS_COLORS with support for multiple color themes
 *
 * @domain `crates.io/vivid`
 * @programs `vivid`
 * @version `0.10.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) vivid`
 * @name `vivid`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vivid
 * // Or access via domain
 * const samePkg = pantry.cratesiovivid
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vivid"
 * console.log(pkg.description) // "Generator for LS_COLORS with support for multip..."
 * console.log(pkg.programs)    // ["vivid"]
 * console.log(pkg.versions[0]) // "0.10.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/vivid.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vividPackage = {
  /**
   * The display name of this package.
   */
  name: 'vivid' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/vivid' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generator for LS_COLORS with support for multiple color themes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/vivid/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) vivid' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vivid',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.1',
    '0.10.0',
    '0.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/vivid' as const,
}

export type VividPackage = typeof vividPackage
