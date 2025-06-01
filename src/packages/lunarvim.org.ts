/**
 * **lunarvim.org** - Crafters of fine Open Source products
 *
 * @domain `lunarvim.org`
 *
 * @install `pkgx lunarvim.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lunarvimorg
 * console.log(pkg.name)        // "lunarvim.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lunarvim-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lunarvimorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'lunarvim.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/lunarvim.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lunarvim.org' as const,
  fullPath: 'lunarvim.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lunarvim.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LunarvimorgPackage = typeof lunarvimorgPackage
