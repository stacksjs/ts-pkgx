/**
 * **c-ares.org** - Crafters of fine Open Source products
 *
 * @domain `c-ares.org`
 *
 * @install `pkgx c-ares.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.caresorg
 * console.log(pkg.name)        // "c-ares.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/c-ares-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caresorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'c-ares.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/c-ares.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'c-ares.org' as const,
  fullPath: 'c-ares.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx c-ares.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CaresorgPackage = typeof caresorgPackage
