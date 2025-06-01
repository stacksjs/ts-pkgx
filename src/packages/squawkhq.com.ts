/**
 * **squawk** - Crafters of fine Open Source products
 *
 * @domain `squawkhq.com`
 *
 * @install `pkgx squawkhq.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.squawkhqcom
 * console.log(pkg.name)        // "squawk"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/squawkhq-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const squawkhqcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'squawk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/squawkhq.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'squawkhq.com' as const,
  fullPath: 'squawkhq.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx squawkhq.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SquawkhqcomPackage = typeof squawkhqcomPackage
