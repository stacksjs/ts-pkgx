/**
 * **lloyd.github.io** - Go home.
 *
 * @domain `lloyd.github.io`
 *
 * @install `pkgx lloyd.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lloydgithubio
 * console.log(pkg.name)        // "lloyd.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lloyd-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lloydgithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/lloyd.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lloyd.github.io' as const,
  fullPath: 'lloyd.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lloyd.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LloydgithubioPackage = typeof lloydgithubioPackage
