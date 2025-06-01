/**
 * **wayland** - Crafters of fine Open Source products
 *
 * @domain `wayland.freedesktop.org`
 *
 * @install `pkgx wayland.freedesktop.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.waylandfreedesktoporg
 * console.log(pkg.name)        // "wayland"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wayland-freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const waylandfreedesktoporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'wayland' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/wayland.freedesktop.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wayland.freedesktop.org' as const,
  fullPath: 'wayland.freedesktop.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wayland.freedesktop.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WaylandfreedesktoporgPackage = typeof waylandfreedesktoporgPackage
