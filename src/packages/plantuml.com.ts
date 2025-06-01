/**
 * **plantuml** - Crafters of fine Open Source products
 *
 * @domain `plantuml.com`
 *
 * @install `pkgx plantuml.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.plantumlcom
 * console.log(pkg.name)        // "plantuml"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/plantuml-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plantumlcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'plantuml' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/plantuml.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'plantuml.com' as const,
  fullPath: 'plantuml.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx plantuml.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PlantumlcomPackage = typeof plantumlcomPackage
