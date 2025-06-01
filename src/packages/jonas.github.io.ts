/**
 * **jonas.github.io** - Go home.
 *
 * @domain `jonas.github.io`
 *
 * @install `pkgx jonas.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jonasgithubio
 * console.log(pkg.name)        // "jonas.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jonas-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jonasgithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/jonas.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jonas.github.io' as const,
  fullPath: 'jonas.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jonas.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JonasgithubioPackage = typeof jonasgithubioPackage
