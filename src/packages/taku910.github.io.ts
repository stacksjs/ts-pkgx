/**
 * **taku910.github.io** - Go home.
 *
 * @domain `taku910.github.io`
 *
 * @install `pkgx taku910.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.taku910githubio
 * console.log(pkg.name)        // "taku910.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taku910-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const taku910githubioPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/taku910.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taku910.github.io' as const,
  fullPath: 'taku910.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx taku910.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Taku910githubioPackage = typeof taku910githubioPackage
