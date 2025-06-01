/**
 * **groovy-lang.org** - Crafters of fine Open Source products
 *
 * @domain `groovy-lang.org`
 *
 * @install `pkgx groovy-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.groovylangorg
 * console.log(pkg.name)        // "groovy-lang.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/groovy-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const groovylangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'groovy-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/groovy-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'groovy-lang.org' as const,
  fullPath: 'groovy-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx groovy-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GroovylangorgPackage = typeof groovylangorgPackage
