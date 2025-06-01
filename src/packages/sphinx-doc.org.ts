/**
 * **sphinx** - Crafters of fine Open Source products
 *
 * @domain `sphinx-doc.org`
 *
 * @install `pkgx sphinx-doc.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sphinxdocorg
 * console.log(pkg.name)        // "sphinx"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sphinx-doc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sphinxdocorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'sphinx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/sphinx-doc.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sphinx-doc.org' as const,
  fullPath: 'sphinx-doc.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sphinx-doc.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SphinxdocorgPackage = typeof sphinxdocorgPackage
