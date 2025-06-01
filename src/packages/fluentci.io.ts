/**
 * **fluentci** - Crafters of fine Open Source products
 *
 * @domain `fluentci.io`
 *
 * @install `pkgx fluentci.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fluentciio
 * console.log(pkg.name)        // "fluentci"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fluentci-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fluentciioPackage = {
  /**
   * The display name of this package.
   */
  name: 'fluentci' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/fluentci.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fluentci.io' as const,
  fullPath: 'fluentci.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fluentci.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FluentciioPackage = typeof fluentciioPackage
