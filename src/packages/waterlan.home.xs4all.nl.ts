/**
 * **waterlan.home.xs4all.nl** - Go home.
 *
 * @domain `waterlan.home.xs4all.nl`
 *
 * @install `pkgx waterlan.home.xs4all.nl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.waterlanhomexs4allnl
 * console.log(pkg.name)        // "waterlan.home.xs4all.nl"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/waterlan-home-xs4all-nl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const waterlanhomexs4allnlPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/waterlan.home.xs4all.nl/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'waterlan.home.xs4all.nl' as const,
  fullPath: 'waterlan.home.xs4all.nl' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx waterlan.home.xs4all.nl' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Waterlanhomexs4allnlPackage = typeof waterlanhomexs4allnlPackage
