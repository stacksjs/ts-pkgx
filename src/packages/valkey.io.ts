/**
 * **valkey** - Crafters of fine Open Source products
 *
 * @domain `valkey.io`
 *
 * @install `pkgx valkey.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.valkeyio
 * console.log(pkg.name)        // "valkey"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/valkey-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const valkeyioPackage = {
  /**
   * The display name of this package.
   */
  name: 'valkey' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/valkey.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'valkey.io' as const,
  fullPath: 'valkey.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx valkey.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ValkeyioPackage = typeof valkeyioPackage
