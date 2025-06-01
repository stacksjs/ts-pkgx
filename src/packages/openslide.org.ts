/**
 * **openslide** - Crafters of fine Open Source products
 *
 * @domain `openslide.org`
 *
 * @install `pkgx openslide.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openslideorg
 * console.log(pkg.name)        // "openslide"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openslide-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openslideorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openslide' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openslide.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openslide.org' as const,
  fullPath: 'openslide.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openslide.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenslideorgPackage = typeof openslideorgPackage
