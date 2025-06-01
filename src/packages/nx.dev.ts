/**
 * **nx.dev** - Crafters of fine Open Source products
 *
 * @domain `nx.dev`
 *
 * @install `pkgx nx.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nxdev
 * console.log(pkg.name)        // "nx.dev"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nx-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nxdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'nx.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/nx.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nx.dev' as const,
  fullPath: 'nx.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nx.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NxdevPackage = typeof nxdevPackage
