/**
 * **scons** - Crafters of fine Open Source products
 *
 * @domain `scons.org`
 *
 * @install `pkgx scons.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sconsorg
 * console.log(pkg.name)        // "scons"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scons-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sconsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'scons' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/scons.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scons.org' as const,
  fullPath: 'scons.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx scons.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SconsorgPackage = typeof sconsorgPackage
