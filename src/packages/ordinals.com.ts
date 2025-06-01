/**
 * **ord** - Index, block explorer, and command-line wallet
 *
 * @domain `ordinals.com`
 * @programs `ord`
 * @version `0.6.1` (4 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/ordinals-com.md
 *
 * @install `sh <(curl https://pkgx.sh) ord`
 * @name `ord`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ord
 * // Or access via domain
 * const samePkg = pantry.ordinalscom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ord"
 * console.log(pkg.description) // "Index, block explorer, and command-line wallet"
 * console.log(pkg.programs)    // ["ord"]
 * console.log(pkg.versions[0]) // "0.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ordinals-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ordPackage = {
  /**
   * The display name of this package.
   */
  name: 'ord' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ordinals.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Index, block explorer, and command-line wallet' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ordinals.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) ord' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ord',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.1',
    '0.6.0',
    '0.5.1',
    '0.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'ordinals.com' as const,
}

export type OrdPackage = typeof ordPackage
