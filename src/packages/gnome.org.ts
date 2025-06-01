/**
 * **gnome.org** - Go home.
 *
 * @domain `gnome.org`
 *
 * @install `pkgx gnome.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorg
 * console.log(pkg.name)        // "gnome.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/gnome.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org' as const,
  fullPath: 'gnome.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gnome.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GnomeorgPackage = typeof gnomeorgPackage
