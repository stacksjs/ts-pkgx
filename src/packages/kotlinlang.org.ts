/**
 * **kotlinlang.org** - Crafters of fine Open Source products
 *
 * @domain `kotlinlang.org`
 *
 * @install `pkgx kotlinlang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kotlinlangorg
 * console.log(pkg.name)        // "kotlinlang.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kotlinlang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kotlinlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'kotlinlang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kotlinlang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kotlinlang.org' as const,
  fullPath: 'kotlinlang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kotlinlang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KotlinlangorgPackage = typeof kotlinlangorgPackage
