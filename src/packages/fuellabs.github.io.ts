/**
 * **fuellabs.github.io** - Go home.
 *
 * @domain `fuellabs.github.io`
 *
 * @install `pkgx fuellabs.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fuellabsgithubio
 * console.log(pkg.name)        // "fuellabs.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fuellabs-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fuellabsgithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/fuellabs.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fuellabs.github.io' as const,
  fullPath: 'fuellabs.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fuellabs.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FuellabsgithubioPackage = typeof fuellabsgithubioPackage
