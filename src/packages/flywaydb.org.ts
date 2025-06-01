/**
 * **flyway** - Crafters of fine Open Source products
 *
 * @domain `flywaydb.org`
 *
 * @install `pkgx flywaydb.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.flywaydborg
 * console.log(pkg.name)        // "flyway"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flywaydb-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flywaydborgPackage = {
  /**
   * The display name of this package.
   */
  name: 'flyway' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/flywaydb.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flywaydb.org' as const,
  fullPath: 'flywaydb.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx flywaydb.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FlywaydborgPackage = typeof flywaydborgPackage
