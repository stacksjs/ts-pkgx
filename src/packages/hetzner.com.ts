/**
 * **hetzner.com** - Go home.
 *
 * @domain `hetzner.com`
 *
 * @install `pkgx hetzner.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hetznercom
 * console.log(pkg.name)        // "hetzner.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hetzner-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hetznercomPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/hetzner.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hetzner.com' as const,
  fullPath: 'hetzner.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hetzner.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HetznercomPackage = typeof hetznercomPackage
