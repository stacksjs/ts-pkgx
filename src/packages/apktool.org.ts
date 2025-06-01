/**
 * **apktool** - Crafters of fine Open Source products
 *
 * @domain `apktool.org`
 *
 * @install `pkgx apktool.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apktoolorg
 * console.log(pkg.name)        // "apktool"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apktool-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apktoolorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'apktool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/apktool.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apktool.org' as const,
  fullPath: 'apktool.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx apktool.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ApktoolorgPackage = typeof apktoolorgPackage
