/**
 * **lima-vm.io** - Crafters of fine Open Source products
 *
 * @domain `lima-vm.io`
 *
 * @install `pkgx lima-vm.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.limavmio
 * console.log(pkg.name)        // "lima-vm.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lima-vm-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const limavmioPackage = {
  /**
   * The display name of this package.
   */
  name: 'lima-vm.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/lima-vm.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lima-vm.io' as const,
  fullPath: 'lima-vm.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lima-vm.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LimavmioPackage = typeof limavmioPackage
