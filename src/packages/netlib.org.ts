/**
 * **netlib.org** - Go home.
 *
 * @domain `netlib.org`
 *
 * @install `pkgx netlib.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.netliborg
 * console.log(pkg.name)        // "netlib.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/netlib-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const netliborgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/netlib.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'netlib.org' as const,
  fullPath: 'netlib.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx netlib.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NetliborgPackage = typeof netliborgPackage
