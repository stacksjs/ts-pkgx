/**
 * **pngquant.org** - Go home.
 *
 * @domain `pngquant.org`
 *
 * @install `pkgx pngquant.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pngquantorg
 * console.log(pkg.name)        // "pngquant.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pngquant-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pngquantorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/pngquant.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pngquant.org' as const,
  fullPath: 'pngquant.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pngquant.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PngquantorgPackage = typeof pngquantorgPackage
