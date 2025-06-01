/**
 * **tsl0922.github.io** - Go home.
 *
 * @domain `tsl0922.github.io`
 *
 * @install `pkgx tsl0922.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tsl0922githubio
 * console.log(pkg.name)        // "tsl0922.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tsl0922-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tsl0922githubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/tsl0922.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tsl0922.github.io' as const,
  fullPath: 'tsl0922.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tsl0922.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Tsl0922githubioPackage = typeof tsl0922githubioPackage
