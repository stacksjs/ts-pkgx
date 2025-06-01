/**
 * **mongodb.com** - Crafters of fine Open Source products
 *
 * @domain `mongodb.com`
 *
 * @install `pkgx mongodb.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mongodbcom
 * console.log(pkg.name)        // "mongodb.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mongodb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mongodbcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'mongodb.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mongodb.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mongodb.com' as const,
  fullPath: 'mongodb.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mongodb.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MongodbcomPackage = typeof mongodbcomPackage
