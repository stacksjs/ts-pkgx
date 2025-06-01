/**
 * **carapace** - Crafters of fine Open Source products
 *
 * @domain `carapace.sh`
 *
 * @install `pkgx carapace.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.carapacesh
 * console.log(pkg.name)        // "carapace"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/carapace-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const carapaceshPackage = {
  /**
   * The display name of this package.
   */
  name: 'carapace' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/carapace.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'carapace.sh' as const,
  fullPath: 'carapace.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx carapace.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CarapaceshPackage = typeof carapaceshPackage
