/**
 * **mosh** - Crafters of fine Open Source products
 *
 * @domain `mosh.org`
 *
 * @install `pkgx mosh.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.moshorg
 * console.log(pkg.name)        // "mosh"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mosh-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const moshorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mosh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mosh.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mosh.org' as const,
  fullPath: 'mosh.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mosh.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MoshorgPackage = typeof moshorgPackage
