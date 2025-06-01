/**
 * **nomad** - Crafters of fine Open Source products
 *
 * @domain `nomadproject.io`
 *
 * @install `pkgx nomadproject.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nomadprojectio
 * console.log(pkg.name)        // "nomad"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nomadproject-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nomadprojectioPackage = {
  /**
   * The display name of this package.
   */
  name: 'nomad' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/nomadproject.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nomadproject.io' as const,
  fullPath: 'nomadproject.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nomadproject.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NomadprojectioPackage = typeof nomadprojectioPackage
