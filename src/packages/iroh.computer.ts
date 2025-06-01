/**
 * **iroh** - Crafters of fine Open Source products
 *
 * @domain `iroh.computer`
 *
 * @install `pkgx iroh.computer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.irohcomputer
 * console.log(pkg.name)        // "iroh"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/iroh-computer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const irohcomputerPackage = {
  /**
   * The display name of this package.
   */
  name: 'iroh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/iroh.computer/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'iroh.computer' as const,
  fullPath: 'iroh.computer' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx iroh.computer' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type IrohcomputerPackage = typeof irohcomputerPackage
