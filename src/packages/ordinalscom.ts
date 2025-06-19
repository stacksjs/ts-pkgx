/**
 * **ord** - Index, block explorer, and command-line wallet
 *
 * @domain `ordinals.com`
 * @programs `ord`
 * @version `0.6.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ord`
 * @aliases `ord`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ord
 * // Or access via domain
 * const samePkg = pantry.ordinalscom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ordinals.com"
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
  name: 'ordinals.com' as const,
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
  installCommand: 'launchpad install ord' as const,
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
  aliases: [
    'ord',
  ] as const,
}

export type OrdPackage = typeof ordPackage
