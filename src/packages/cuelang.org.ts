/**
 * **cue** - Crafters of fine Open Source products
 *
 * @domain `cuelang.org`
 *
 * @install `pkgx cuelang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cuelangorg
 * console.log(pkg.name)        // "cue"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cuelang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cuelangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cue' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cuelang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cuelang.org' as const,
  fullPath: 'cuelang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cuelang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CuelangorgPackage = typeof cuelangorgPackage
