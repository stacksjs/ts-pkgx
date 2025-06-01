/**
 * **fabianlindfors.se** - Go home.
 *
 * @domain `fabianlindfors.se`
 *
 * @install `pkgx fabianlindfors.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fabianlindforsse
 * console.log(pkg.name)        // "fabianlindfors.se"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fabianlindfors-se.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fabianlindforssePackage = {
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
  homepage: 'https://pkgx.dev/pkgs/fabianlindfors.se/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fabianlindfors.se' as const,
  fullPath: 'fabianlindfors.se' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fabianlindfors.se' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FabianlindforssePackage = typeof fabianlindforssePackage
