/**
 * **doctave** - Crafters of fine Open Source products
 *
 * @domain `doctave.com`
 *
 * @install `pkgx doctave.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.doctavecom
 * console.log(pkg.name)        // "doctave"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/doctave-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const doctavecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'doctave' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/doctave.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'doctave.com' as const,
  fullPath: 'doctave.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx doctave.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DoctavecomPackage = typeof doctavecomPackage
