/**
 * **tidy** - Crafters of fine Open Source products
 *
 * @domain `html-tidy.org`
 *
 * @install `pkgx html-tidy.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.htmltidyorg
 * console.log(pkg.name)        // "tidy"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/html-tidy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const htmltidyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'tidy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/html-tidy.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'html-tidy.org' as const,
  fullPath: 'html-tidy.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx html-tidy.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HtmltidyorgPackage = typeof htmltidyorgPackage
