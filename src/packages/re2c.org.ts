/**
 * **re2c** - Crafters of fine Open Source products
 *
 * @domain `re2c.org`
 *
 * @install `pkgx re2c.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.re2corg
 * console.log(pkg.name)        // "re2c"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/re2c-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const re2corgPackage = {
  /**
   * The display name of this package.
   */
  name: 're2c' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/re2c.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 're2c.org' as const,
  fullPath: 're2c.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx re2c.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Re2corgPackage = typeof re2corgPackage
