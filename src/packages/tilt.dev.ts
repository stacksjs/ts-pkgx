/**
 * **tilt** - Crafters of fine Open Source products
 *
 * @domain `tilt.dev`
 *
 * @install `pkgx tilt.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tiltdev
 * console.log(pkg.name)        // "tilt"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tilt-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tiltdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'tilt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tilt.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tilt.dev' as const,
  fullPath: 'tilt.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tilt.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TiltdevPackage = typeof tiltdevPackage
