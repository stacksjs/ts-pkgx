/**
 * **freedesktop.org** - Go home.
 *
 * @domain `freedesktop.org`
 *
 * @install `pkgx freedesktop.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporg
 * console.log(pkg.name)        // "freedesktop.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/freedesktop.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org' as const,
  fullPath: 'freedesktop.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx freedesktop.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FreedesktoporgPackage = typeof freedesktoporgPackage
