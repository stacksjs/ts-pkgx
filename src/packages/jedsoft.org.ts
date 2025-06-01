/**
 * **jedsoft.org** - Go home.
 *
 * @domain `jedsoft.org`
 *
 * @install `pkgx jedsoft.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jedsoftorg
 * console.log(pkg.name)        // "jedsoft.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jedsoft-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jedsoftorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/jedsoft.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jedsoft.org' as const,
  fullPath: 'jedsoft.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jedsoft.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JedsoftorgPackage = typeof jedsoftorgPackage
