/**
 * **proj** - Crafters of fine Open Source products
 *
 * @domain `proj.org`
 *
 * @install `pkgx proj.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.projorg
 * console.log(pkg.name)        // "proj"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/proj-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'proj' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/proj.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'proj.org' as const,
  fullPath: 'proj.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx proj.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ProjorgPackage = typeof projorgPackage
