/**
 * **rome** - Crafters of fine Open Source products
 *
 * @domain `rome.tools`
 *
 * @install `pkgx rome.tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rometools
 * console.log(pkg.name)        // "rome"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rome-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rometoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'rome' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rome.tools/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rome.tools' as const,
  fullPath: 'rome.tools' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rome.tools' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RometoolsPackage = typeof rometoolsPackage
