/**
 * **gh** - Crafters of fine Open Source products
 *
 * @domain `cli.github.com`
 *
 * @install `pkgx cli.github.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cligithubcom
 * console.log(pkg.name)        // "gh"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cli-github-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cligithubcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'gh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cli.github.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cli.github.com' as const,
  fullPath: 'cli.github.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cli.github.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CligithubcomPackage = typeof cligithubcomPackage
