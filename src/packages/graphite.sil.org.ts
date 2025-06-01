/**
 * **gr2fonttest** - Crafters of fine Open Source products
 *
 * @domain `graphite.sil.org`
 *
 * @install `pkgx graphite.sil.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.graphitesilorg
 * console.log(pkg.name)        // "gr2fonttest"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/graphite-sil-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const graphitesilorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gr2fonttest' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/graphite.sil.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'graphite.sil.org' as const,
  fullPath: 'graphite.sil.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx graphite.sil.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GraphitesilorgPackage = typeof graphitesilorgPackage
