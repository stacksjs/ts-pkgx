/**
 * **restic.net** - Go home.
 *
 * @domain `restic.net`
 *
 * @install `pkgx restic.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.resticnet
 * console.log(pkg.name)        // "restic.net"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/restic-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const resticnetPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/restic.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'restic.net' as const,
  fullPath: 'restic.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx restic.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ResticnetPackage = typeof resticnetPackage
