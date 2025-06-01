/**
 * **elvish** - Crafters of fine Open Source products
 *
 * @domain `elv.sh`
 *
 * @install `pkgx elv.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elvsh
 * console.log(pkg.name)        // "elvish"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elv-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elvshPackage = {
  /**
   * The display name of this package.
   */
  name: 'elvish' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/elv.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elv.sh' as const,
  fullPath: 'elv.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx elv.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ElvshPackage = typeof elvshPackage
