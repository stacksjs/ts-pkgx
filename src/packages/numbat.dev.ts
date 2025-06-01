/**
 * **numbat** - Crafters of fine Open Source products
 *
 * @domain `numbat.dev`
 *
 * @install `pkgx numbat.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.numbatdev
 * console.log(pkg.name)        // "numbat"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/numbat-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const numbatdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'numbat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/numbat.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'numbat.dev' as const,
  fullPath: 'numbat.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx numbat.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NumbatdevPackage = typeof numbatdevPackage
