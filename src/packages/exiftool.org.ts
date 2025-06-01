/**
 * **exiftool** - Crafters of fine Open Source products
 *
 * @domain `exiftool.org`
 *
 * @install `pkgx exiftool.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.exiftoolorg
 * console.log(pkg.name)        // "exiftool"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/exiftool-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const exiftoolorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'exiftool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/exiftool.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'exiftool.org' as const,
  fullPath: 'exiftool.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx exiftool.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ExiftoolorgPackage = typeof exiftoolorgPackage
