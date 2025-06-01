/**
 * **velero** - Crafters of fine Open Source products
 *
 * @domain `velero.io`
 *
 * @install `pkgx velero.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.veleroio
 * console.log(pkg.name)        // "velero"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/velero-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const veleroioPackage = {
  /**
   * The display name of this package.
   */
  name: 'velero' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/velero.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'velero.io' as const,
  fullPath: 'velero.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx velero.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VeleroioPackage = typeof veleroioPackage
