/**
 * **taplo** - Crafters of fine Open Source products
 *
 * @domain `taplo.tamasfe.dev`
 *
 * @install `pkgx taplo.tamasfe.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.taplotamasfedev
 * console.log(pkg.name)        // "taplo"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taplo-tamasfe-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const taplotamasfedevPackage = {
  /**
   * The display name of this package.
   */
  name: 'taplo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/taplo.tamasfe.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taplo.tamasfe.dev' as const,
  fullPath: 'taplo.tamasfe.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx taplo.tamasfe.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TaplotamasfedevPackage = typeof taplotamasfedevPackage
