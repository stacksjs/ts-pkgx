/**
 * **webmproject.org** - Go home.
 *
 * @domain `webmproject.org`
 *
 * @install `pkgx webmproject.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.webmprojectorg
 * console.log(pkg.name)        // "webmproject.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/webmproject-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const webmprojectorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/webmproject.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'webmproject.org' as const,
  fullPath: 'webmproject.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx webmproject.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WebmprojectorgPackage = typeof webmprojectorgPackage
