/**
 * **aomedia.googlesource.com** - Go home.
 *
 * @domain `aomedia.googlesource.com`
 *
 * @install `pkgx aomedia.googlesource.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.aomediagooglesourcecom
 * console.log(pkg.name)        // "aomedia.googlesource.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aomedia-googlesource-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aomediagooglesourcecomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/aomedia.googlesource.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aomedia.googlesource.com' as const,
  fullPath: 'aomedia.googlesource.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx aomedia.googlesource.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AomediagooglesourcecomPackage = typeof aomediagooglesourcecomPackage
