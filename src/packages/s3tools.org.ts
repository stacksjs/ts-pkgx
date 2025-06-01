/**
 * **s3cmd** - Crafters of fine Open Source products
 *
 * @domain `s3tools.org`
 *
 * @install `pkgx s3tools.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.s3toolsorg
 * console.log(pkg.name)        // "s3cmd"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/s3tools-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const s3toolsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 's3cmd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/s3tools.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 's3tools.org' as const,
  fullPath: 's3tools.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx s3tools.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type S3toolsorgPackage = typeof s3toolsorgPackage
