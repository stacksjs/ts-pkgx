/**
 * **orhun.dev** - Go home.
 *
 * @domain `orhun.dev`
 *
 * @install `pkgx orhun.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.orhundev
 * console.log(pkg.name)        // "orhun.dev"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/orhun-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const orhundevPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/orhun.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'orhun.dev' as const,
  fullPath: 'orhun.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx orhun.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OrhundevPackage = typeof orhundevPackage
