/**
 * **mkdocs** - Crafters of fine Open Source products
 *
 * @domain `mkdocs.org`
 *
 * @install `pkgx mkdocs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mkdocsorg
 * console.log(pkg.name)        // "mkdocs"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mkdocs-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mkdocsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mkdocs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mkdocs.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mkdocs.org' as const,
  fullPath: 'mkdocs.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mkdocs.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MkdocsorgPackage = typeof mkdocsorgPackage
