/**
 * **podman** - Crafters of fine Open Source products
 *
 * @domain `podman.io`
 *
 * @install `pkgx podman.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.podmanio
 * console.log(pkg.name)        // "podman"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/podman-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const podmanioPackage = {
  /**
   * The display name of this package.
   */
  name: 'podman' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/podman.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'podman.io' as const,
  fullPath: 'podman.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx podman.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PodmanioPackage = typeof podmanioPackage
