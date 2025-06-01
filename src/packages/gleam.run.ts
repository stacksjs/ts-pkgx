/**
 * **gleam** - Crafters of fine Open Source products
 *
 * @domain `gleam.run`
 *
 * @install `pkgx gleam.run`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gleamrun
 * console.log(pkg.name)        // "gleam"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gleam-run.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gleamrunPackage = {
  /**
   * The display name of this package.
   */
  name: 'gleam' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gleam.run/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gleam.run' as const,
  fullPath: 'gleam.run' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gleam.run' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GleamrunPackage = typeof gleamrunPackage
