/**
 * **watchexec** - Crafters of fine Open Source products
 *
 * @domain `watchexec.github.io`
 *
 * @install `pkgx watchexec.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.watchexecgithubio
 * console.log(pkg.name)        // "watchexec"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/watchexec-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const watchexecgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'watchexec' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/watchexec.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'watchexec.github.io' as const,
  fullPath: 'watchexec.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx watchexec.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WatchexecgithubioPackage = typeof watchexecgithubioPackage
