/**
 * **vspipe** - Crafters of fine Open Source products
 *
 * @domain `vapoursynth.com`
 *
 * @install `pkgx vapoursynth.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vapoursynthcom
 * console.log(pkg.name)        // "vspipe"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vapoursynth-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vapoursynthcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'vspipe' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/vapoursynth.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vapoursynth.com' as const,
  fullPath: 'vapoursynth.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx vapoursynth.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VapoursynthcomPackage = typeof vapoursynthcomPackage
