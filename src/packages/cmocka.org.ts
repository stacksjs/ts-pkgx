/**
 * **cmocka.org** - Crafters of fine Open Source products
 *
 * @domain `cmocka.org`
 *
 * @install `pkgx cmocka.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cmockaorg
 * console.log(pkg.name)        // "cmocka.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cmocka-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cmockaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cmocka.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cmocka.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cmocka.org' as const,
  fullPath: 'cmocka.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cmocka.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CmockaorgPackage = typeof cmockaorgPackage
