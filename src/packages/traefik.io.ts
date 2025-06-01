/**
 * **traefik** - Crafters of fine Open Source products
 *
 * @domain `traefik.io`
 *
 * @install `pkgx traefik.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.traefikio
 * console.log(pkg.name)        // "traefik"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/traefik-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const traefikioPackage = {
  /**
   * The display name of this package.
   */
  name: 'traefik' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/traefik.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'traefik.io' as const,
  fullPath: 'traefik.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx traefik.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TraefikioPackage = typeof traefikioPackage
