/**
 * **freetds.org** - Crafters of fine Open Source products
 *
 * @domain `freetds.org`
 *
 * @install `pkgx freetds.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freetdsorg
 * console.log(pkg.name)        // "freetds.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freetds-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freetdsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'freetds.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/freetds.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freetds.org' as const,
  fullPath: 'freetds.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx freetds.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FreetdsorgPackage = typeof freetdsorgPackage
