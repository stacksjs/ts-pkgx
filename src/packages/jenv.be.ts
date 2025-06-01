/**
 * **jenv** - Crafters of fine Open Source products
 *
 * @domain `jenv.be`
 *
 * @install `pkgx jenv.be`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jenvbe
 * console.log(pkg.name)        // "jenv"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jenv-be.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jenvbePackage = {
  /**
   * The display name of this package.
   */
  name: 'jenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/jenv.be/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jenv.be' as const,
  fullPath: 'jenv.be' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jenv.be' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JenvbePackage = typeof jenvbePackage
