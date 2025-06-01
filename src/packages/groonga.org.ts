/**
 * **groonga** - Crafters of fine Open Source products
 *
 * @domain `groonga.org`
 *
 * @install `pkgx groonga.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.groongaorg
 * console.log(pkg.name)        // "groonga"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/groonga-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const groongaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'groonga' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/groonga.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'groonga.org' as const,
  fullPath: 'groonga.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx groonga.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GroongaorgPackage = typeof groongaorgPackage
