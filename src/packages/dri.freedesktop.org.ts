/**
 * **libdrm** - Crafters of fine Open Source products
 *
 * @domain `dri.freedesktop.org`
 *
 * @install `pkgx dri.freedesktop.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.drifreedesktoporg
 * console.log(pkg.name)        // "libdrm"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dri-freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const drifreedesktoporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libdrm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dri.freedesktop.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dri.freedesktop.org' as const,
  fullPath: 'dri.freedesktop.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dri.freedesktop.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DrifreedesktoporgPackage = typeof drifreedesktoporgPackage
