/**
 * **sing-box** - Crafters of fine Open Source products
 *
 * @domain `sing-box.app`
 *
 * @install `pkgx sing-box.app`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.singboxapp
 * console.log(pkg.name)        // "sing-box"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sing-box-app.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const singboxappPackage = {
  /**
   * The display name of this package.
   */
  name: 'sing-box' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/sing-box.app/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sing-box.app' as const,
  fullPath: 'sing-box.app' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sing-box.app' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SingboxappPackage = typeof singboxappPackage
