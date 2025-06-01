/**
 * **theora.org** - Crafters of fine Open Source products
 *
 * @domain `theora.org`
 *
 * @install `pkgx theora.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.theoraorg
 * console.log(pkg.name)        // "theora.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/theora-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const theoraorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'theora.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/theora.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'theora.org' as const,
  fullPath: 'theora.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx theora.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TheoraorgPackage = typeof theoraorgPackage
