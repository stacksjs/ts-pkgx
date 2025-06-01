/**
 * **amrdeveloper.github.io** - Go home.
 *
 * @domain `amrdeveloper.github.io`
 *
 * @install `pkgx amrdeveloper.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.amrdevelopergithubio
 * console.log(pkg.name)        // "amrdeveloper.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/amrdeveloper-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const amrdevelopergithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/amrdeveloper.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'amrdeveloper.github.io' as const,
  fullPath: 'amrdeveloper.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx amrdeveloper.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AmrdevelopergithubioPackage = typeof amrdevelopergithubioPackage
