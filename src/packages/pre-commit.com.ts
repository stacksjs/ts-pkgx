/**
 * **pre-commit** - Crafters of fine Open Source products
 *
 * @domain `pre-commit.com`
 *
 * @install `pkgx pre-commit.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.precommitcom
 * console.log(pkg.name)        // "pre-commit"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pre-commit-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const precommitcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'pre-commit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pre-commit.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pre-commit.com' as const,
  fullPath: 'pre-commit.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pre-commit.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PrecommitcomPackage = typeof precommitcomPackage
