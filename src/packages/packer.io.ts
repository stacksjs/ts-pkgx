/**
 * **packer** - Crafters of fine Open Source products
 *
 * @domain `packer.io`
 *
 * @install `pkgx packer.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.packerio
 * console.log(pkg.name)        // "packer"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/packer-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const packerioPackage = {
  /**
   * The display name of this package.
   */
  name: 'packer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/packer.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'packer.io' as const,
  fullPath: 'packer.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx packer.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PackerioPackage = typeof packerioPackage
