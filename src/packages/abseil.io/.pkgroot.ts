/**
 * **.pkgroot** - pkgx package
 *
 * @domain `abseil.io/.pkgroot`
 *
 * @install `pkgx abseil.io/.pkgroot`
 * @name `.pkgroot`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pkgroot
 * // Or access via domain
 * const samePkg = pantry.abseiliopkgroot
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // ".pkgroot"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/abseil-io/-pkgroot.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgrootPackage = {
  /**
   * The display name of this package.
   */
  name: '.pkgroot' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'abseil.io/.pkgroot' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx abseil.io/.pkgroot' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'abseil.io/.pkgroot' as const,
}

export type PkgrootPackage = typeof pkgrootPackage
