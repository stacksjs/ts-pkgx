/**
 * **snyk** - Crafters of fine Open Source products
 *
 * @domain `snyk.io`
 *
 * @install `pkgx snyk.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.snykio
 * console.log(pkg.name)        // "snyk"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/snyk-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const snykioPackage = {
  /**
   * The display name of this package.
   */
  name: 'snyk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/snyk.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'snyk.io' as const,
  fullPath: 'snyk.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx snyk.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SnykioPackage = typeof snykioPackage
