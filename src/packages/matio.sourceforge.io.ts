/**
 * **libmatio** - Crafters of fine Open Source products
 *
 * @domain `matio.sourceforge.io`
 *
 * @install `pkgx matio.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.matiosourceforgeio
 * console.log(pkg.name)        // "libmatio"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/matio-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const matiosourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libmatio' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/matio.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'matio.sourceforge.io' as const,
  fullPath: 'matio.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx matio.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MatiosourceforgeioPackage = typeof matiosourceforgeioPackage
