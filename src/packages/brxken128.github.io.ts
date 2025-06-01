/**
 * **brxken128.github.io** - Go home.
 *
 * @domain `brxken128.github.io`
 *
 * @install `pkgx brxken128.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.brxken128githubio
 * console.log(pkg.name)        // "brxken128.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/brxken128-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const brxken128githubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/brxken128.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'brxken128.github.io' as const,
  fullPath: 'brxken128.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx brxken128.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Brxken128githubioPackage = typeof brxken128githubioPackage
