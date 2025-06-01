/**
 * **fna-xna.github.io** - Crafters of fine Open Source products
 *
 * @domain `fna-xna.github.io`
 *
 * @install `pkgx fna-xna.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fnaxnagithubio
 * console.log(pkg.name)        // "fna-xna.github.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fna-xna-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fnaxnagithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'fna-xna.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/fna-xna.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fna-xna.github.io' as const,
  fullPath: 'fna-xna.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fna-xna.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FnaxnagithubioPackage = typeof fnaxnagithubioPackage
