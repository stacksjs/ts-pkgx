/**
 * **oras** - Crafters of fine Open Source products
 *
 * @domain `oras.land`
 *
 * @install `pkgx oras.land`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.orasland
 * console.log(pkg.name)        // "oras"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oras-land.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oraslandPackage = {
  /**
   * The display name of this package.
   */
  name: 'oras' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/oras.land/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oras.land' as const,
  fullPath: 'oras.land' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx oras.land' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OraslandPackage = typeof oraslandPackage
