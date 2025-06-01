/**
 * **sourceforge.net** - Go home.
 *
 * @domain `sourceforge.net`
 *
 * @install `pkgx sourceforge.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourceforgenet
 * console.log(pkg.name)        // "sourceforge.net"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/sourceforge.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net' as const,
  fullPath: 'sourceforge.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sourceforge.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SourceforgenetPackage = typeof sourceforgenetPackage
