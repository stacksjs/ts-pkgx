/**
 * **harfbuzz.org** - Crafters of fine Open Source products
 *
 * @domain `harfbuzz.org`
 *
 * @install `pkgx harfbuzz.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.harfbuzzorg
 * console.log(pkg.name)        // "harfbuzz.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/harfbuzz-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const harfbuzzorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'harfbuzz.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/harfbuzz.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'harfbuzz.org' as const,
  fullPath: 'harfbuzz.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx harfbuzz.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HarfbuzzorgPackage = typeof harfbuzzorgPackage
