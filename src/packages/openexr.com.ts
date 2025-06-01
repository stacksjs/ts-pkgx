/**
 * **exr** - Crafters of fine Open Source products
 *
 * @domain `openexr.com`
 *
 * @install `pkgx openexr.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openexrcom
 * console.log(pkg.name)        // "exr"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openexr-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openexrcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'exr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openexr.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openexr.com' as const,
  fullPath: 'openexr.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openexr.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenexrcomPackage = typeof openexrcomPackage
