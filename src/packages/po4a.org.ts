/**
 * **po4a.org** - Crafters of fine Open Source products
 *
 * @domain `po4a.org`
 *
 * @install `pkgx po4a.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.po4aorg
 * console.log(pkg.name)        // "po4a.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/po4a-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const po4aorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'po4a.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/po4a.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'po4a.org' as const,
  fullPath: 'po4a.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx po4a.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Po4aorgPackage = typeof po4aorgPackage
