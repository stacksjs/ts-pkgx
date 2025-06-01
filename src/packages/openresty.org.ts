/**
 * **openresty.org** - Crafters of fine Open Source products
 *
 * @domain `openresty.org`
 *
 * @install `pkgx openresty.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openrestyorg
 * console.log(pkg.name)        // "openresty.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openresty-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openrestyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openresty.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openresty.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openresty.org' as const,
  fullPath: 'openresty.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openresty.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenrestyorgPackage = typeof openrestyorgPackage
