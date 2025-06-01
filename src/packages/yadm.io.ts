/**
 * **yadm** - Crafters of fine Open Source products
 *
 * @domain `yadm.io`
 *
 * @install `pkgx yadm.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.yadmio
 * console.log(pkg.name)        // "yadm"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yadm-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yadmioPackage = {
  /**
   * The display name of this package.
   */
  name: 'yadm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/yadm.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yadm.io' as const,
  fullPath: 'yadm.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx yadm.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type YadmioPackage = typeof yadmioPackage
