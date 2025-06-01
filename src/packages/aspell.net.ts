/**
 * **aspell.net** - Crafters of fine Open Source products
 *
 * @domain `aspell.net`
 *
 * @install `pkgx aspell.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.aspellnet
 * console.log(pkg.name)        // "aspell.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aspell-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aspellnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'aspell.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/aspell.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aspell.net' as const,
  fullPath: 'aspell.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx aspell.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AspellnetPackage = typeof aspellnetPackage
