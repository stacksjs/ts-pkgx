/**
 * **invisible-island.net-lynx** - Go home.
 *
 * @domain `invisible-island.net-lynx`
 *
 * @install `pkgx invisible-island.net-lynx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.invisibleislandnetlynx
 * console.log(pkg.name)        // "invisible-island.net-lynx"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/invisible-island-net-lynx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const invisibleislandnetlynxPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/invisible-island.net-lynx/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'invisible-island.net-lynx' as const,
  fullPath: 'invisible-island.net-lynx' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx invisible-island.net-lynx' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type InvisibleislandnetlynxPackage = typeof invisibleislandnetlynxPackage
