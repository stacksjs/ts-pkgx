/**
 * **charm.sh** - Go home.
 *
 * @domain `charm.sh`
 *
 * @install `pkgx charm.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.charmsh
 * console.log(pkg.name)        // "charm.sh"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charmshPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/charm.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh' as const,
  fullPath: 'charm.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx charm.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CharmshPackage = typeof charmshPackage
