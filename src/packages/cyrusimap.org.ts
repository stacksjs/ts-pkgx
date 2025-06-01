/**
 * **cyrusimap.org** - Go home.
 *
 * @domain `cyrusimap.org`
 *
 * @install `pkgx cyrusimap.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cyrusimaporg
 * console.log(pkg.name)        // "cyrusimap.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cyrusimap-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cyrusimaporgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/cyrusimap.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cyrusimap.org' as const,
  fullPath: 'cyrusimap.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cyrusimap.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CyrusimaporgPackage = typeof cyrusimaporgPackage
