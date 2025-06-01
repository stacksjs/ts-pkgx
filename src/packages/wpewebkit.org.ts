/**
 * **wpewebkit.org** - Go home.
 *
 * @domain `wpewebkit.org`
 *
 * @install `pkgx wpewebkit.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wpewebkitorg
 * console.log(pkg.name)        // "wpewebkit.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wpewebkit-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wpewebkitorgPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/wpewebkit.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wpewebkit.org' as const,
  fullPath: 'wpewebkit.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wpewebkit.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WpewebkitorgPackage = typeof wpewebkitorgPackage
