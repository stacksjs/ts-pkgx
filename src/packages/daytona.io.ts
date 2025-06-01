/**
 * **daytona** - Crafters of fine Open Source products
 *
 * @domain `daytona.io`
 *
 * @install `pkgx daytona.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.daytonaio
 * console.log(pkg.name)        // "daytona"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/daytona-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const daytonaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'daytona' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/daytona.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'daytona.io' as const,
  fullPath: 'daytona.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx daytona.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DaytonaioPackage = typeof daytonaioPackage
