/**
 * **dest-unreach.org** - Go home.
 *
 * @domain `dest-unreach.org`
 *
 * @install `pkgx dest-unreach.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.destunreachorg
 * console.log(pkg.name)        // "dest-unreach.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dest-unreach-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const destunreachorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/dest-unreach.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dest-unreach.org' as const,
  fullPath: 'dest-unreach.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dest-unreach.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DestunreachorgPackage = typeof destunreachorgPackage
