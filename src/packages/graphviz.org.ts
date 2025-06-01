/**
 * **graphviz.org** - Crafters of fine Open Source products
 *
 * @domain `graphviz.org`
 *
 * @install `pkgx graphviz.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.graphvizorg
 * console.log(pkg.name)        // "graphviz.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/graphviz-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const graphvizorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'graphviz.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/graphviz.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'graphviz.org' as const,
  fullPath: 'graphviz.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx graphviz.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GraphvizorgPackage = typeof graphvizorgPackage
