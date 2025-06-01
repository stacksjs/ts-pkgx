/**
 * **Arkade** - Crafters of fine Open Source products
 *
 * @domain `arkade.dev`
 *
 * @install `pkgx arkade.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.arkadedev
 * console.log(pkg.name)        // "Arkade"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/arkade-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const arkadedevPackage = {
  /**
   * The display name of this package.
   */
  name: 'Arkade' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/arkade.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'arkade.dev' as const,
  fullPath: 'arkade.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx arkade.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ArkadedevPackage = typeof arkadedevPackage
