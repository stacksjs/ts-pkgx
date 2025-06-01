/**
 * **SeaweedFS** - Crafters of fine Open Source products
 *
 * @domain `seaweedfs.com`
 *
 * @install `pkgx seaweedfs.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.seaweedfscom
 * console.log(pkg.name)        // "SeaweedFS"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/seaweedfs-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const seaweedfscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'SeaweedFS' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/seaweedfs.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'seaweedfs.com' as const,
  fullPath: 'seaweedfs.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx seaweedfs.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SeaweedfscomPackage = typeof seaweedfscomPackage
