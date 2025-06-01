/**
 * **onsi.github.io** - Go home.
 *
 * @domain `onsi.github.io`
 *
 * @install `pkgx onsi.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.onsigithubio
 * console.log(pkg.name)        // "onsi.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/onsi-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const onsigithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/onsi.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'onsi.github.io' as const,
  fullPath: 'onsi.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx onsi.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OnsigithubioPackage = typeof onsigithubioPackage
