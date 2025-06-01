/**
 * **sf.net** - Go home.
 *
 * @domain `sf.net`
 *
 * @install `pkgx sf.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sfnet
 * console.log(pkg.name)        // "sf.net"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sf-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sfnetPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/sf.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sf.net' as const,
  fullPath: 'sf.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sf.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SfnetPackage = typeof sfnetPackage
