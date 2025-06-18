/**
 * **gci** - GCI, a tool that control golang package import order and make it always deterministic.
 *
 * @domain `github.com/daixiang0/gci`
 * @programs `gci`
 * @version `0.13.6` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) gci`
 * @name `gci`
 * @aliases `daixiang0/gci`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gci
 * // Or access via domain
 * const samePkg = pantry.githubcomdaixiang0gci
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gci"
 * console.log(pkg.description) // "GCI, a tool that control golang package import ..."
 * console.log(pkg.programs)    // ["gci"]
 * console.log(pkg.versions[0]) // "0.13.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/daixiang0/gci.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gciPackage = {
  /**
   * The display name of this package.
   */
  name: 'gci' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/daixiang0/gci' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GCI, a tool that control golang package import order and make it always deterministic.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/daixiang0/gci/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gci' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gci',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.6',
    '0.13.5',
    '0.13.4',
    '0.13.3',
    '0.13.2',
    '0.13.1',
    '0.13.0',
    '0.12.3',
    '0.12.2',
    '0.12.1',
    '0.12.0',
    '0.11.2',
    '0.11.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'daixiang0/gci',
  ] as const,
  fullPath: 'github.com/daixiang0/gci' as const,
}

export type GciPackage = typeof gciPackage
