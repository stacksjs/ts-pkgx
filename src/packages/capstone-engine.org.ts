/**
 * **cstool** - Crafters of fine Open Source products
 *
 * @domain `capstone-engine.org`
 *
 * @install `pkgx capstone-engine.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.capstoneengineorg
 * console.log(pkg.name)        // "cstool"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/capstone-engine-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const capstoneengineorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cstool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/capstone-engine.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'capstone-engine.org' as const,
  fullPath: 'capstone-engine.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx capstone-engine.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CapstoneengineorgPackage = typeof capstoneengineorgPackage
