/**
 * **cfssl.org** - Crafters of fine Open Source products
 *
 * @domain `cfssl.org`
 *
 * @install `pkgx cfssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cfsslorg
 * console.log(pkg.name)        // "cfssl.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cfssl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cfsslorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cfssl.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cfssl.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cfssl.org' as const,
  fullPath: 'cfssl.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cfssl.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CfsslorgPackage = typeof cfsslorgPackage
