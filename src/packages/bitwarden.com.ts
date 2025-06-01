/**
 * **bw** - Crafters of fine Open Source products
 *
 * @domain `bitwarden.com`
 *
 * @install `pkgx bitwarden.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bitwardencom
 * console.log(pkg.name)        // "bw"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bitwarden-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bitwardencomPackage = {
  /**
   * The display name of this package.
   */
  name: 'bw' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/bitwarden.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bitwarden.com' as const,
  fullPath: 'bitwarden.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx bitwarden.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BitwardencomPackage = typeof bitwardencomPackage
