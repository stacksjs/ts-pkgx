/**
 * **smartmontools.org** - Crafters of fine Open Source products
 *
 * @domain `smartmontools.org`
 *
 * @install `pkgx smartmontools.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.smartmontoolsorg
 * console.log(pkg.name)        // "smartmontools.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/smartmontools-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const smartmontoolsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'smartmontools.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/smartmontools.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'smartmontools.org' as const,
  fullPath: 'smartmontools.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx smartmontools.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SmartmontoolsorgPackage = typeof smartmontoolsorgPackage
