/**
 * **invisible-island.net** - Go home.
 *
 * @domain `invisible-island.net`
 *
 * @install `pkgx invisible-island.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.invisibleislandnet
 * console.log(pkg.name)        // "invisible-island.net"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/invisible-island-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const invisibleislandnetPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/invisible-island.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'invisible-island.net' as const,
  fullPath: 'invisible-island.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx invisible-island.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type InvisibleislandnetPackage = typeof invisibleislandnetPackage
