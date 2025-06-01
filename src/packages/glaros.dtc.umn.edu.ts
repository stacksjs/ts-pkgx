/**
 * **glaros.dtc.umn.edu** - Go home.
 *
 * @domain `glaros.dtc.umn.edu`
 *
 * @install `pkgx glaros.dtc.umn.edu`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.glarosdtcumnedu
 * console.log(pkg.name)        // "glaros.dtc.umn.edu"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/glaros-dtc-umn-edu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glarosdtcumneduPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/glaros.dtc.umn.edu/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'glaros.dtc.umn.edu' as const,
  fullPath: 'glaros.dtc.umn.edu' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx glaros.dtc.umn.edu' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GlarosdtcumneduPackage = typeof glarosdtcumneduPackage
