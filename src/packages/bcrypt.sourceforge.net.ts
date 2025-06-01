/**
 * **bcrypt** - Crafters of fine Open Source products
 *
 * @domain `bcrypt.sourceforge.net`
 *
 * @install `pkgx bcrypt.sourceforge.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bcryptsourceforgenet
 * console.log(pkg.name)        // "bcrypt"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bcrypt-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bcryptsourceforgenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'bcrypt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/bcrypt.sourceforge.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bcrypt.sourceforge.net' as const,
  fullPath: 'bcrypt.sourceforge.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx bcrypt.sourceforge.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BcryptsourceforgenetPackage = typeof bcryptsourceforgenetPackage
