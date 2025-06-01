/**
 * **darwinsys.com** - Go home.
 *
 * @domain `darwinsys.com`
 *
 * @install `pkgx darwinsys.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.darwinsyscom
 * console.log(pkg.name)        // "darwinsys.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/darwinsys-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const darwinsyscomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/darwinsys.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'darwinsys.com' as const,
  fullPath: 'darwinsys.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx darwinsys.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DarwinsyscomPackage = typeof darwinsyscomPackage
