/**
 * **koyeb** - Crafters of fine Open Source products
 *
 * @domain `koyeb.com`
 *
 * @install `pkgx koyeb.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.koyebcom
 * console.log(pkg.name)        // "koyeb"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/koyeb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const koyebcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'koyeb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/koyeb.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'koyeb.com' as const,
  fullPath: 'koyeb.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx koyeb.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KoyebcomPackage = typeof koyebcomPackage
