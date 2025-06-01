/**
 * **mypy-lang.org** - Crafters of fine Open Source products
 *
 * @domain `mypy-lang.org`
 *
 * @install `pkgx mypy-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mypylangorg
 * console.log(pkg.name)        // "mypy-lang.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mypy-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mypylangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mypy-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mypy-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mypy-lang.org' as const,
  fullPath: 'mypy-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mypy-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MypylangorgPackage = typeof mypylangorgPackage
