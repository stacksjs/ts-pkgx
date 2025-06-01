/**
 * **rpm.org** - Go home.
 *
 * @domain `rpm.org`
 *
 * @install `pkgx rpm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rpmorg
 * console.log(pkg.name)        // "rpm.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rpm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rpmorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/rpm.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rpm.org' as const,
  fullPath: 'rpm.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rpm.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RpmorgPackage = typeof rpmorgPackage
