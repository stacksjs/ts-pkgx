/**
 * **dotenv-linter** - Crafters of fine Open Source products
 *
 * @domain `dotenv-linter.github.io`
 *
 * @install `pkgx dotenv-linter.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dotenvlintergithubio
 * console.log(pkg.name)        // "dotenv-linter"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dotenv-linter-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dotenvlintergithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'dotenv-linter' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dotenv-linter.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dotenv-linter.github.io' as const,
  fullPath: 'dotenv-linter.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dotenv-linter.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DotenvlintergithubioPackage = typeof dotenvlintergithubioPackage
