/**
 * **docbook.org** - Crafters of fine Open Source products
 *
 * @domain `docbook.org`
 *
 * @install `pkgx docbook.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.docbookorg
 * console.log(pkg.name)        // "docbook.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docbook-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const docbookorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'docbook.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/docbook.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docbook.org' as const,
  fullPath: 'docbook.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx docbook.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DocbookorgPackage = typeof docbookorgPackage
