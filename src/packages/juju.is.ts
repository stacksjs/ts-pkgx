/**
 * **juju** - Crafters of fine Open Source products
 *
 * @domain `juju.is`
 *
 * @install `pkgx juju.is`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jujuis
 * console.log(pkg.name)        // "juju"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/juju-is.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jujuisPackage = {
  /**
   * The display name of this package.
   */
  name: 'juju' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/juju.is/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'juju.is' as const,
  fullPath: 'juju.is' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx juju.is' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JujuisPackage = typeof jujuisPackage
