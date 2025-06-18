/**
 * **d2** - D2 is a modern diagram scripting language that turns text to diagrams.
 *
 * @domain `d2lang.com`
 * @programs `d2`
 * @version `0.7.0` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) d2`
 * @name `d2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.d2
 * // Or access via domain
 * const samePkg = pantry.d2langcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "d2"
 * console.log(pkg.description) // "D2 is a modern diagram scripting language that ..."
 * console.log(pkg.programs)    // ["d2"]
 * console.log(pkg.versions[0]) // "0.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/d2lang-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const d2Package = {
  /**
   * The display name of this package.
   */
  name: 'd2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'd2lang.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'D2 is a modern diagram scripting language that turns text to diagrams.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/d2lang.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) d2' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'd2',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.0',
    '0.6.9',
    '0.6.8',
    '0.6.7',
    '0.6.6',
    '0.6.5',
    '0.6.4',
    '0.6.3',
    '0.6.2',
    '0.6.1',
    '0.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'd2lang.com' as const,
}

export type D2Package = typeof d2Package
