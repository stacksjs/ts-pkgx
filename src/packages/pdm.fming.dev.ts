/**
 * **pdm** - Crafters of fine Open Source products
 *
 * @domain `pdm.fming.dev`
 *
 * @install `pkgx pdm.fming.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pdmfmingdev
 * console.log(pkg.name)        // "pdm"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pdm-fming-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pdmfmingdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'pdm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pdm.fming.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pdm.fming.dev' as const,
  fullPath: 'pdm.fming.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pdm.fming.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PdmfmingdevPackage = typeof pdmfmingdevPackage
