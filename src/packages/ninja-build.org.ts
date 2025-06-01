/**
 * **ninja** - Crafters of fine Open Source products
 *
 * @domain `ninja-build.org`
 *
 * @install `pkgx ninja-build.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ninjabuildorg
 * console.log(pkg.name)        // "ninja"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ninja-build-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ninjabuildorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ninja' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ninja-build.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ninja-build.org' as const,
  fullPath: 'ninja-build.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ninja-build.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NinjabuildorgPackage = typeof ninjabuildorgPackage
