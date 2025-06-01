/**
 * **jpeg.org** - Go home.
 *
 * @domain `jpeg.org`
 *
 * @install `pkgx jpeg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jpegorg
 * console.log(pkg.name)        // "jpeg.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jpeg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jpegorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/jpeg.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jpeg.org' as const,
  fullPath: 'jpeg.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jpeg.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JpegorgPackage = typeof jpegorgPackage
