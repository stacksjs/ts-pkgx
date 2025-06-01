/**
 * **tofu** - Crafters of fine Open Source products
 *
 * @domain `opentofu.org`
 *
 * @install `pkgx opentofu.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opentofuorg
 * console.log(pkg.name)        // "tofu"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opentofu-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opentofuorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'tofu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/opentofu.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opentofu.org' as const,
  fullPath: 'opentofu.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx opentofu.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpentofuorgPackage = typeof opentofuorgPackage
