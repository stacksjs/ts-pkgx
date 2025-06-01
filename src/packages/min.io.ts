/**
 * **minio** - Crafters of fine Open Source products
 *
 * @domain `min.io`
 *
 * @install `pkgx min.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.minio
 * console.log(pkg.name)        // "minio"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/min-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const minioPackage = {
  /**
   * The display name of this package.
   */
  name: 'minio' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/min.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'min.io' as const,
  fullPath: 'min.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx min.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MinioPackage = typeof minioPackage
