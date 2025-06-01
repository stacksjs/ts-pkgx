/**
 * **tsc** - Crafters of fine Open Source products
 *
 * @domain `typescriptlang.org`
 *
 * @install `pkgx typescriptlang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.typescriptlangorg
 * console.log(pkg.name)        // "tsc"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/typescriptlang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const typescriptlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'tsc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/typescriptlang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'typescriptlang.org' as const,
  fullPath: 'typescriptlang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx typescriptlang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TypescriptlangorgPackage = typeof typescriptlangorgPackage
