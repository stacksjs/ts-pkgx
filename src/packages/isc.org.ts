/**
 * **isc.org** - Go home.
 *
 * @domain `isc.org`
 *
 * @install `pkgx isc.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.iscorg
 * console.log(pkg.name)        // "isc.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/isc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const iscorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/isc.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'isc.org' as const,
  fullPath: 'isc.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx isc.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type IscorgPackage = typeof iscorgPackage
