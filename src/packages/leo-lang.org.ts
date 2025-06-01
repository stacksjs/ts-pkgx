/**
 * **leo** - Crafters of fine Open Source products
 *
 * @domain `leo-lang.org`
 *
 * @install `pkgx leo-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.leolangorg
 * console.log(pkg.name)        // "leo"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leo-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leolangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'leo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/leo-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leo-lang.org' as const,
  fullPath: 'leo-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx leo-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LeolangorgPackage = typeof leolangorgPackage
