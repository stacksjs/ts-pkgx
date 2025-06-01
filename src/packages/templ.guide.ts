/**
 * **templ** - Crafters of fine Open Source products
 *
 * @domain `templ.guide`
 *
 * @install `pkgx templ.guide`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.templguide
 * console.log(pkg.name)        // "templ"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/templ-guide.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const templguidePackage = {
  /**
   * The display name of this package.
   */
  name: 'templ' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/templ.guide/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'templ.guide' as const,
  fullPath: 'templ.guide' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx templ.guide' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TemplguidePackage = typeof templguidePackage
