/**
 * **pypa.github.io** - Go home.
 *
 * @domain `pypa.github.io`
 *
 * @install `pkgx pypa.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pypagithubio
 * console.log(pkg.name)        // "pypa.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pypagithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/pypa.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.github.io' as const,
  fullPath: 'pypa.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pypa.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PypagithubioPackage = typeof pypagithubioPackage
