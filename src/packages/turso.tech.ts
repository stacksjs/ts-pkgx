/**
 * **turso** - Crafters of fine Open Source products
 *
 * @domain `turso.tech`
 *
 * @install `pkgx turso.tech`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tursotech
 * console.log(pkg.name)        // "turso"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/turso-tech.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tursotechPackage = {
  /**
   * The display name of this package.
   */
  name: 'turso' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/turso.tech/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'turso.tech' as const,
  fullPath: 'turso.tech' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx turso.tech' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TursotechPackage = typeof tursotechPackage
