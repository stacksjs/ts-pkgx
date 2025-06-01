/**
 * **jugit.fz-juelich.de** - Go home.
 *
 * @domain `jugit.fz-juelich.de`
 *
 * @install `pkgx jugit.fz-juelich.de`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jugitfzjuelichde
 * console.log(pkg.name)        // "jugit.fz-juelich.de"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jugit-fz-juelich-de.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jugitfzjuelichdePackage = {
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
  homepage: 'https://pkgx.dev/pkgs/jugit.fz-juelich.de/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jugit.fz-juelich.de' as const,
  fullPath: 'jugit.fz-juelich.de' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jugit.fz-juelich.de' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JugitfzjuelichdePackage = typeof jugitfzjuelichdePackage
