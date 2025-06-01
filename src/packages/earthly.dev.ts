/**
 * **earthly.dev** - Go home.
 *
 * @domain `earthly.dev`
 *
 * @install `pkgx earthly.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.earthlydev
 * console.log(pkg.name)        // "earthly.dev"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/earthly-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const earthlydevPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/earthly.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'earthly.dev' as const,
  fullPath: 'earthly.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx earthly.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type EarthlydevPackage = typeof earthlydevPackage
