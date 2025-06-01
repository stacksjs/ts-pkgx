/**
 * **qpdf** - Crafters of fine Open Source products
 *
 * @domain `qpdf.sourceforge.io`
 *
 * @install `pkgx qpdf.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.qpdfsourceforgeio
 * console.log(pkg.name)        // "qpdf"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/qpdf-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qpdfsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'qpdf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/qpdf.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'qpdf.sourceforge.io' as const,
  fullPath: 'qpdf.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx qpdf.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type QpdfsourceforgeioPackage = typeof qpdfsourceforgeioPackage
