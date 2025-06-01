/**
 * **wavpack.com** - Crafters of fine Open Source products
 *
 * @domain `wavpack.com`
 *
 * @install `pkgx wavpack.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wavpackcom
 * console.log(pkg.name)        // "wavpack.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wavpack-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wavpackcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'wavpack.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/wavpack.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wavpack.com' as const,
  fullPath: 'wavpack.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wavpack.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WavpackcomPackage = typeof wavpackcomPackage
