/**
 * **vault** - Crafters of fine Open Source products
 *
 * @domain `vaultproject.io`
 *
 * @install `pkgx vaultproject.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vaultprojectio
 * console.log(pkg.name)        // "vault"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vaultproject-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vaultprojectioPackage = {
  /**
   * The display name of this package.
   */
  name: 'vault' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/vaultproject.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vaultproject.io' as const,
  fullPath: 'vaultproject.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx vaultproject.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VaultprojectioPackage = typeof vaultprojectioPackage
