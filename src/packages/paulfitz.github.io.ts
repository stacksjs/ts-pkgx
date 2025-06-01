/**
 * **paulfitz.github.io** - Go home.
 *
 * @domain `paulfitz.github.io`
 *
 * @install `pkgx paulfitz.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.paulfitzgithubio
 * console.log(pkg.name)        // "paulfitz.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/paulfitz-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const paulfitzgithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/paulfitz.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'paulfitz.github.io' as const,
  fullPath: 'paulfitz.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx paulfitz.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PaulfitzgithubioPackage = typeof paulfitzgithubioPackage
