/**
 * **filippo.io** - Go home.
 *
 * @domain `filippo.io`
 *
 * @install `pkgx filippo.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.filippoio
 * console.log(pkg.name)        // "filippo.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/filippo-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const filippoioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/filippo.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'filippo.io' as const,
  fullPath: 'filippo.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx filippo.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FilippoioPackage = typeof filippoioPackage
