/**
 * **scala-lang.org** - Crafters of fine Open Source products
 *
 * @domain `scala-lang.org`
 *
 * @install `pkgx scala-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.scalalangorg
 * console.log(pkg.name)        // "scala-lang.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scala-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scalalangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'scala-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/scala-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scala-lang.org' as const,
  fullPath: 'scala-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx scala-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ScalalangorgPackage = typeof scalalangorgPackage
