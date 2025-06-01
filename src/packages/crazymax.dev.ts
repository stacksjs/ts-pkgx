/**
 * **crazymax.dev** - Go home.
 *
 * @domain `crazymax.dev`
 *
 * @install `pkgx crazymax.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.crazymaxdev
 * console.log(pkg.name)        // "crazymax.dev"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crazymax-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const crazymaxdevPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/crazymax.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crazymax.dev' as const,
  fullPath: 'crazymax.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crazymax.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CrazymaxdevPackage = typeof crazymaxdevPackage
