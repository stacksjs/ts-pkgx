/**
 * **projen** - Crafters of fine Open Source products
 *
 * @domain `projen.io`
 *
 * @install `pkgx projen.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.projenio
 * console.log(pkg.name)        // "projen"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/projen-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projenioPackage = {
  /**
   * The display name of this package.
   */
  name: 'projen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/projen.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'projen.io' as const,
  fullPath: 'projen.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx projen.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ProjenioPackage = typeof projenioPackage
