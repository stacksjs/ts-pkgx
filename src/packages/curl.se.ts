/**
 * **cURL** - Crafters of fine Open Source products
 *
 * @domain `curl.se`
 *
 * @install `pkgx curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.curlse
 * console.log(pkg.name)        // "cURL"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/curl-se.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const curlsePackage = {
  /**
   * The display name of this package.
   */
  name: 'cURL' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/curl.se/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'curl.se' as const,
  fullPath: 'curl.se' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx curl.se' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CurlsePackage = typeof curlsePackage
