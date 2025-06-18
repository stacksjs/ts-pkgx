/**
 * **duck** - Simple, extendable and embeddable scripting language.
 *
 * @domain `sagiegurari.github.io/duckscript`
 * @programs `duck`
 * @version `0.11.1` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/sagiegurari-github-io/duckscript.md
 *
 * @install `sh <(curl https://pkgx.sh) duck`
 * @name `duckscript`
 * @aliases `duck`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.duck
 * // Or access via domain
 * const samePkg = pantry.sagiegurarigithubioduckscript
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "duckscript"
 * console.log(pkg.description) // "Simple, extendable and embeddable scripting lan..."
 * console.log(pkg.programs)    // ["duck"]
 * console.log(pkg.versions[0]) // "0.11.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sagiegurari-github-io/duckscript.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const duckPackage = {
  /**
   * The display name of this package.
   */
  name: 'duckscript' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sagiegurari.github.io/duckscript' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Simple, extendable and embeddable scripting language.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sagiegurari.github.io/duckscript/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) duck' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'duck',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.11.1',
    '0.11.0',
    '0.10.0',
    '0.9.4',
    '0.9.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'duck',
  ] as const,
  fullPath: 'sagiegurari.github.io/duckscript' as const,
}

export type DuckPackage = typeof duckPackage
