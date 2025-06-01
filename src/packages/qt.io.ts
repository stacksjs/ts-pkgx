/**
 * **qt.io** - Crafters of fine Open Source products
 *
 * @domain `qt.io`
 *
 * @install `pkgx qt.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.qtio
 * console.log(pkg.name)        // "qt.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/qt-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qtioPackage = {
  /**
   * The display name of this package.
   */
  name: 'qt.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/qt.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'qt.io' as const,
  fullPath: 'qt.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx qt.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type QtioPackage = typeof qtioPackage
