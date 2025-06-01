/**
 * **ghostgum.com.au** - Go home.
 *
 * @domain `ghostgum.com.au`
 *
 * @install `pkgx ghostgum.com.au`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ghostgumcomau
 * console.log(pkg.name)        // "ghostgum.com.au"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ghostgum-com-au.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ghostgumcomauPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/ghostgum.com.au/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ghostgum.com.au' as const,
  fullPath: 'ghostgum.com.au' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ghostgum.com.au' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GhostgumcomauPackage = typeof ghostgumcomauPackage
