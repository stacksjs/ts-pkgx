/**
 * **jetp** - Crafters of fine Open Source products
 *
 * @domain `jetporch.com`
 *
 * @install `pkgx jetporch.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jetporchcom
 * console.log(pkg.name)        // "jetp"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jetporch-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jetporchcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'jetp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/jetporch.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jetporch.com' as const,
  fullPath: 'jetporch.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jetporch.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JetporchcomPackage = typeof jetporchcomPackage
