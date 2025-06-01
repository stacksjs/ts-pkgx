/**
 * **talosctl** - Crafters of fine Open Source products
 *
 * @domain `talos.dev`
 *
 * @install `pkgx talos.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.talosdev
 * console.log(pkg.name)        // "talosctl"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/talos-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const talosdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'talosctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/talos.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'talos.dev' as const,
  fullPath: 'talos.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx talos.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TalosdevPackage = typeof talosdevPackage
