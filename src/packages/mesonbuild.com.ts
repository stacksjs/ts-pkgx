/**
 * **meson** - Crafters of fine Open Source products
 *
 * @domain `mesonbuild.com`
 *
 * @install `pkgx mesonbuild.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mesonbuildcom
 * console.log(pkg.name)        // "meson"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mesonbuild-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mesonbuildcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'meson' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mesonbuild.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mesonbuild.com' as const,
  fullPath: 'mesonbuild.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mesonbuild.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MesonbuildcomPackage = typeof mesonbuildcomPackage
