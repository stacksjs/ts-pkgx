/**
 * **v** - Crafters of fine Open Source products
 *
 * @domain `vlang.io`
 *
 * @install `pkgx vlang.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vlangio
 * console.log(pkg.name)        // "v"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vlang-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vlangioPackage = {
  /**
   * The display name of this package.
   */
  name: 'v' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/vlang.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vlang.io' as const,
  fullPath: 'vlang.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx vlang.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VlangioPackage = typeof vlangioPackage
