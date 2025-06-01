/**
 * **logological.org** - Go home.
 *
 * @domain `logological.org`
 *
 * @install `pkgx logological.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.logologicalorg
 * console.log(pkg.name)        // "logological.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/logological-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const logologicalorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/logological.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'logological.org' as const,
  fullPath: 'logological.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx logological.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LogologicalorgPackage = typeof logologicalorgPackage
