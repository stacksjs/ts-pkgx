/**
 * **idevicedate** - Crafters of fine Open Source products
 *
 * @domain `libimobiledevice.org`
 *
 * @install `pkgx libimobiledevice.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libimobiledeviceorg
 * console.log(pkg.name)        // "idevicedate"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libimobiledeviceorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'idevicedate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libimobiledevice.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libimobiledevice.org' as const,
  fullPath: 'libimobiledevice.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libimobiledevice.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibimobiledeviceorgPackage = typeof libimobiledeviceorgPackage
