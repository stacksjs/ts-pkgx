/**
 * **pack** - Crafters of fine Open Source products
 *
 * @domain `buildpacks.io`
 *
 * @install `pkgx buildpacks.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.buildpacksio
 * console.log(pkg.name)        // "pack"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/buildpacks-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const buildpacksioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pack' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/buildpacks.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'buildpacks.io' as const,
  fullPath: 'buildpacks.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx buildpacks.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BuildpacksioPackage = typeof buildpacksioPackage
