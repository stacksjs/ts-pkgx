/**
 * **curlie** - Crafters of fine Open Source products
 *
 * @domain `curlie.io`
 *
 * @install `pkgx curlie.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.curlieio
 * console.log(pkg.name)        // "curlie"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/curlie-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const curlieioPackage = {
  /**
   * The display name of this package.
   */
  name: 'curlie' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/curlie.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'curlie.io' as const,
  fullPath: 'curlie.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx curlie.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CurlieioPackage = typeof curlieioPackage
