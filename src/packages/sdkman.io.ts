/**
 * **sdkman-init.sh** - Crafters of fine Open Source products
 *
 * @domain `sdkman.io`
 *
 * @install `pkgx sdkman.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sdkmanio
 * console.log(pkg.name)        // "sdkman-init.sh"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sdkman-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sdkmanioPackage = {
  /**
   * The display name of this package.
   */
  name: 'sdkman-init.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/sdkman.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sdkman.io' as const,
  fullPath: 'sdkman.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sdkman.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SdkmanioPackage = typeof sdkmanioPackage
