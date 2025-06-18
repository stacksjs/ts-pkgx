/**
 * **faac** - Freeware Advanced Audio Coder faac mirror
 *
 * @domain `sf.net/faac`
 * @programs `faac`
 * @version `1.30.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) faac`
 * @name `faac`
 * @aliases `sourceforge.net/faac`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.faac
 * // Or access via domain
 * const samePkg = pantry.sfnetfaac
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "faac"
 * console.log(pkg.description) // "Freeware Advanced Audio Coder faac mirror"
 * console.log(pkg.programs)    // ["faac"]
 * console.log(pkg.versions[0]) // "1.30.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sf-net/faac.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const faacPackage = {
  /**
   * The display name of this package.
   */
  name: 'faac' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sf.net/faac' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Freeware Advanced Audio Coder faac mirror' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/faac/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) faac' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'faac',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.30.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sourceforge.net/faac',
  ] as const,
  fullPath: 'sourceforge.net/faac' as const,
}

export type FaacPackage = typeof faacPackage
