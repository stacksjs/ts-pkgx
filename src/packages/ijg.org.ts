/**
 * **ijg.org** - Crafters of fine Open Source products
 *
 * @domain `ijg.org`
 *
 * @install `pkgx ijg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ijgorg
 * console.log(pkg.name)        // "ijg.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ijg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ijgorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ijg.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ijg.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ijg.org' as const,
  fullPath: 'ijg.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ijg.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type IjgorgPackage = typeof ijgorgPackage
