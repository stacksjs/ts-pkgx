/**
 * **dotenvx** - Crafters of fine Open Source products
 *
 * @domain `dotenvx.com`
 *
 * @install `pkgx dotenvx.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dotenvxcom
 * console.log(pkg.name)        // "dotenvx"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dotenvx-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dotenvxcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'dotenvx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dotenvx.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dotenvx.com' as const,
  fullPath: 'dotenvx.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dotenvx.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DotenvxcomPackage = typeof dotenvxcomPackage
