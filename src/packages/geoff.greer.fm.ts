/**
 * **geoff.greer.fm** - Go home.
 *
 * @domain `geoff.greer.fm`
 *
 * @install `pkgx geoff.greer.fm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.geoffgreerfm
 * console.log(pkg.name)        // "geoff.greer.fm"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/geoff-greer-fm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const geoffgreerfmPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/geoff.greer.fm/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'geoff.greer.fm' as const,
  fullPath: 'geoff.greer.fm' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx geoff.greer.fm' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GeoffgreerfmPackage = typeof geoffgreerfmPackage
