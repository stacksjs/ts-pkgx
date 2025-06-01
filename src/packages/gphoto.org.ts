/**
 * **gphoto.org** - Go home.
 *
 * @domain `gphoto.org`
 *
 * @install `pkgx gphoto.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gphotoorg
 * console.log(pkg.name)        // "gphoto.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gphoto-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gphotoorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/gphoto.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gphoto.org' as const,
  fullPath: 'gphoto.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gphoto.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GphotoorgPackage = typeof gphotoorgPackage
