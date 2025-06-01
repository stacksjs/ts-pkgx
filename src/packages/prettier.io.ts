/**
 * **prettier** - Crafters of fine Open Source products
 *
 * @domain `prettier.io`
 *
 * @install `pkgx prettier.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.prettierio
 * console.log(pkg.name)        // "prettier"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/prettier-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const prettierioPackage = {
  /**
   * The display name of this package.
   */
  name: 'prettier' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/prettier.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'prettier.io' as const,
  fullPath: 'prettier.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx prettier.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PrettierioPackage = typeof prettierioPackage
