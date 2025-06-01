/**
 * **opencore-amr.sourceforge.io** - Crafters of fine Open Source products
 *
 * @domain `opencore-amr.sourceforge.io`
 *
 * @install `pkgx opencore-amr.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opencoreamrsourceforgeio
 * console.log(pkg.name)        // "opencore-amr.sourceforge.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opencore-amr-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opencoreamrsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencore-amr.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/opencore-amr.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opencore-amr.sourceforge.io' as const,
  fullPath: 'opencore-amr.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx opencore-amr.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpencoreamrsourceforgeioPackage = typeof opencoreamrsourceforgeioPackage
