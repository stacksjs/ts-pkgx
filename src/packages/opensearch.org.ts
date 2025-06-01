/**
 * **opensearch** - Crafters of fine Open Source products
 *
 * @domain `opensearch.org`
 *
 * @install `pkgx opensearch.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opensearchorg
 * console.log(pkg.name)        // "opensearch"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opensearch-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opensearchorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'opensearch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/opensearch.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opensearch.org' as const,
  fullPath: 'opensearch.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx opensearch.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpensearchorgPackage = typeof opensearchorgPackage
