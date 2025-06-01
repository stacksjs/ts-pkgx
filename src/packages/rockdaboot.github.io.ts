/**
 * **rockdaboot.github.io** - Go home.
 *
 * @domain `rockdaboot.github.io`
 *
 * @install `pkgx rockdaboot.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rockdabootgithubio
 * console.log(pkg.name)        // "rockdaboot.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rockdaboot-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rockdabootgithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/rockdaboot.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rockdaboot.github.io' as const,
  fullPath: 'rockdaboot.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rockdaboot.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RockdabootgithubioPackage = typeof rockdabootgithubioPackage
