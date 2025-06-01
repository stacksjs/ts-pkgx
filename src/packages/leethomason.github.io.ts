/**
 * **leethomason.github.io** - Go home.
 *
 * @domain `leethomason.github.io`
 *
 * @install `pkgx leethomason.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.leethomasongithubio
 * console.log(pkg.name)        // "leethomason.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leethomason-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leethomasongithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/leethomason.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leethomason.github.io' as const,
  fullPath: 'leethomason.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx leethomason.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LeethomasongithubioPackage = typeof leethomasongithubioPackage
