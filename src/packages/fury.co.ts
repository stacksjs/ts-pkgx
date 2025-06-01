/**
 * **fury** - Gemfury CLI
 *
 * @domain `fury.co`
 * @programs `fury`
 * @version `0.23.0` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/fury-co.md
 *
 * @install `sh <(curl https://pkgx.sh) fury`
 * @name `fury`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fury
 * // Or access via domain
 * const samePkg = pantry.furyco
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fury"
 * console.log(pkg.description) // "Gemfury CLI"
 * console.log(pkg.programs)    // ["fury"]
 * console.log(pkg.versions[0]) // "0.23.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fury-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const furyPackage = {
  /**
   * The display name of this package.
   */
  name: 'fury' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fury.co' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Gemfury CLI' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fury.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) fury' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fury',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.23.0',
    '0.22.0',
    '0.21.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'fury.co' as const,
}

export type FuryPackage = typeof furyPackage
