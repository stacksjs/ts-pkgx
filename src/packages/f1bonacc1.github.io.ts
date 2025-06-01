/**
 * **f1bonacc1.github.io** - Go home.
 *
 * @domain `f1bonacc1.github.io`
 *
 * @install `pkgx f1bonacc1.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.f1bonacc1githubio
 * console.log(pkg.name)        // "f1bonacc1.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/f1bonacc1-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const f1bonacc1githubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/f1bonacc1.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'f1bonacc1.github.io' as const,
  fullPath: 'f1bonacc1.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx f1bonacc1.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type F1bonacc1githubioPackage = typeof f1bonacc1githubioPackage
