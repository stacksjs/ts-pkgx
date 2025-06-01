/**
 * **assimp** - Crafters of fine Open Source products
 *
 * @domain `assimp.org`
 *
 * @install `pkgx assimp.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.assimporg
 * console.log(pkg.name)        // "assimp"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/assimp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const assimporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'assimp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/assimp.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'assimp.org' as const,
  fullPath: 'assimp.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx assimp.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AssimporgPackage = typeof assimporgPackage
