/**
 * **uchardet** - Encoding detector library
 *
 * @domain `freedesktop.org/uchardet`
 * @programs `uchardet`
 * @version `0.0.8` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/uchardet.md
 *
 * @install `sh <(curl https://pkgx.sh) uchardet`
 * @name `uchardet`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.uchardet
 * // Or access via domain
 * const samePkg = pantry.freedesktoporguchardet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "uchardet"
 * console.log(pkg.description) // "Encoding detector library"
 * console.log(pkg.programs)    // ["uchardet"]
 * console.log(pkg.versions[0]) // "0.0.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/uchardet.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const uchardetPackage = {
  /**
   * The display name of this package.
   */
  name: 'uchardet' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/uchardet' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Encoding detector library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/uchardet/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) uchardet' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'uchardet',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'freedesktop.org/uchardet' as const,
}

export type UchardetPackage = typeof uchardetPackage
