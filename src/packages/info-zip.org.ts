/**
 * **info-zip.org** - Go home.
 *
 * @domain `info-zip.org`
 *
 * @install `pkgx info-zip.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.infoziporg
 * console.log(pkg.name)        // "info-zip.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/info-zip-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const infoziporgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/info-zip.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'info-zip.org' as const,
  fullPath: 'info-zip.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx info-zip.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type InfoziporgPackage = typeof infoziporgPackage
