/**
 * **thoughtworks.github.io** - Go home.
 *
 * @domain `thoughtworks.github.io`
 *
 * @install `pkgx thoughtworks.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.thoughtworksgithubio
 * console.log(pkg.name)        // "thoughtworks.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/thoughtworks-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thoughtworksgithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/thoughtworks.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'thoughtworks.github.io' as const,
  fullPath: 'thoughtworks.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx thoughtworks.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ThoughtworksgithubioPackage = typeof thoughtworksgithubioPackage
