/**
 * **poppler.freedesktop.org** - Crafters of fine Open Source products
 *
 * @domain `poppler.freedesktop.org`
 *
 * @install `pkgx poppler.freedesktop.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.popplerfreedesktoporg
 * console.log(pkg.name)        // "poppler.freedesktop.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/poppler-freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const popplerfreedesktoporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'poppler.freedesktop.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/poppler.freedesktop.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'poppler.freedesktop.org' as const,
  fullPath: 'poppler.freedesktop.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx poppler.freedesktop.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PopplerfreedesktoporgPackage = typeof popplerfreedesktoporgPackage
