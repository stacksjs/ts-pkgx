/**
 * **svenstaro.github.io** - Go home.
 *
 * @domain `svenstaro.github.io`
 *
 * @install `pkgx svenstaro.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.svenstarogithubio
 * console.log(pkg.name)        // "svenstaro.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/svenstaro-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const svenstarogithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/svenstaro.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'svenstaro.github.io' as const,
  fullPath: 'svenstaro.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx svenstaro.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SvenstarogithubioPackage = typeof svenstarogithubioPackage
