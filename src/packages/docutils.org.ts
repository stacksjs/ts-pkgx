/**
 * **docutils.org** - Crafters of fine Open Source products
 *
 * @domain `docutils.org`
 *
 * @install `pkgx docutils.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.docutilsorg
 * console.log(pkg.name)        // "docutils.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docutils-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const docutilsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'docutils.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/docutils.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docutils.org' as const,
  fullPath: 'docutils.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx docutils.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DocutilsorgPackage = typeof docutilsorgPackage
