/**
 * **debian.org** - Go home.
 *
 * @domain `debian.org`
 *
 * @install `pkgx debian.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.debianorg
 * console.log(pkg.name)        // "debian.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/debian-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const debianorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/debian.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'debian.org' as const,
  fullPath: 'debian.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx debian.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DebianorgPackage = typeof debianorgPackage
