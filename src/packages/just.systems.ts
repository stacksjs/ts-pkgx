/**
 * **just** - Crafters of fine Open Source products
 *
 * @domain `just.systems`
 *
 * @install `pkgx just.systems`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.justsystems
 * console.log(pkg.name)        // "just"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/just-systems.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const justsystemsPackage = {
  /**
   * The display name of this package.
   */
  name: 'just' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/just.systems/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'just.systems' as const,
  fullPath: 'just.systems' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx just.systems' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JustsystemsPackage = typeof justsystemsPackage
