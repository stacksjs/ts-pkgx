/**
 * **vamp** - Crafters of fine Open Source products
 *
 * @domain `vamp-plugins.org`
 *
 * @install `pkgx vamp-plugins.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vamppluginsorg
 * console.log(pkg.name)        // "vamp"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vamp-plugins-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vamppluginsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'vamp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/vamp-plugins.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vamp-plugins.org' as const,
  fullPath: 'vamp-plugins.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx vamp-plugins.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VamppluginsorgPackage = typeof vamppluginsorgPackage
