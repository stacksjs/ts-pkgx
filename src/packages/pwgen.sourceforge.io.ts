/**
 * **pwgen** - Crafters of fine Open Source products
 *
 * @domain `pwgen.sourceforge.io`
 *
 * @install `pkgx pwgen.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pwgensourceforgeio
 * console.log(pkg.name)        // "pwgen"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pwgen-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pwgensourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pwgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pwgen.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pwgen.sourceforge.io' as const,
  fullPath: 'pwgen.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pwgen.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PwgensourceforgeioPackage = typeof pwgensourceforgeioPackage
