/**
 * **google.github.io** - Go home.
 *
 * @domain `google.github.io`
 *
 * @install `pkgx google.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlegithubio
 * console.log(pkg.name)        // "google.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlegithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/google.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.github.io' as const,
  fullPath: 'google.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx google.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GooglegithubioPackage = typeof googlegithubioPackage
