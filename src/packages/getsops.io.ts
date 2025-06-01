/**
 * **sops** - Crafters of fine Open Source products
 *
 * @domain `getsops.io`
 *
 * @install `pkgx getsops.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getsopsio
 * console.log(pkg.name)        // "sops"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getsops-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getsopsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'sops' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/getsops.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getsops.io' as const,
  fullPath: 'getsops.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx getsops.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GetsopsioPackage = typeof getsopsioPackage
