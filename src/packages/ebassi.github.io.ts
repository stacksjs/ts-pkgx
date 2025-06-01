/**
 * **ebassi.github.io** - Go home.
 *
 * @domain `ebassi.github.io`
 *
 * @install `pkgx ebassi.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ebassigithubio
 * console.log(pkg.name)        // "ebassi.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ebassi-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ebassigithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/ebassi.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ebassi.github.io' as const,
  fullPath: 'ebassi.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ebassi.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type EbassigithubioPackage = typeof ebassigithubioPackage
