/**
 * **httpie.io** - Crafters of fine Open Source products
 *
 * @domain `httpie.io`
 *
 * @install `pkgx httpie.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.httpieio
 * console.log(pkg.name)        // "httpie.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/httpie-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const httpieioPackage = {
  /**
   * The display name of this package.
   */
  name: 'httpie.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/httpie.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'httpie.io' as const,
  fullPath: 'httpie.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx httpie.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HttpieioPackage = typeof httpieioPackage
