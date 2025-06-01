/**
 * **openprinting.github.io** - Go home.
 *
 * @domain `openprinting.github.io`
 *
 * @install `pkgx openprinting.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openprintinggithubio
 * console.log(pkg.name)        // "openprinting.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openprinting-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openprintinggithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/openprinting.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openprinting.github.io' as const,
  fullPath: 'openprinting.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openprinting.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenprintinggithubioPackage = typeof openprintinggithubioPackage
