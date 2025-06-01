/**
 * **kluctl** - Crafters of fine Open Source products
 *
 * @domain `kluctl.io`
 *
 * @install `pkgx kluctl.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kluctlio
 * console.log(pkg.name)        // "kluctl"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kluctl-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kluctlioPackage = {
  /**
   * The display name of this package.
   */
  name: 'kluctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kluctl.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kluctl.io' as const,
  fullPath: 'kluctl.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kluctl.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KluctlioPackage = typeof kluctlioPackage
