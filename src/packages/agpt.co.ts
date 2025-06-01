/**
 * **Auto-GPT** - Crafters of fine Open Source products
 *
 * @domain `agpt.co`
 *
 * @install `pkgx agpt.co`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.agptco
 * console.log(pkg.name)        // "Auto-GPT"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/agpt-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const agptcoPackage = {
  /**
   * The display name of this package.
   */
  name: 'Auto-GPT' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/agpt.co/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'agpt.co' as const,
  fullPath: 'agpt.co' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx agpt.co' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AgptcoPackage = typeof agptcoPackage
