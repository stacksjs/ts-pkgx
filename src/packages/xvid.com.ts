/**
 * **xvid.com** - Crafters of fine Open Source products
 *
 * @domain `xvid.com`
 *
 * @install `pkgx xvid.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xvidcom
 * console.log(pkg.name)        // "xvid.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xvid-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xvidcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'xvid.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/xvid.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xvid.com' as const,
  fullPath: 'xvid.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx xvid.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type XvidcomPackage = typeof xvidcomPackage
