/**
 * **k3d** - Crafters of fine Open Source products
 *
 * @domain `k3d.io`
 *
 * @install `pkgx k3d.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.k3dio
 * console.log(pkg.name)        // "k3d"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/k3d-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const k3dioPackage = {
  /**
   * The display name of this package.
   */
  name: 'k3d' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/k3d.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'k3d.io' as const,
  fullPath: 'k3d.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx k3d.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type K3dioPackage = typeof k3dioPackage
