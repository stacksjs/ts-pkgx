/**
 * **vektra.github.io** - Go home.
 *
 * @domain `vektra.github.io`
 *
 * @install `pkgx vektra.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vektragithubio
 * console.log(pkg.name)        // "vektra.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vektra-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vektragithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/vektra.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vektra.github.io' as const,
  fullPath: 'vektra.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx vektra.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VektragithubioPackage = typeof vektragithubioPackage
