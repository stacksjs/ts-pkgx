/**
 * **opendev.org** - Go home.
 *
 * @domain `opendev.org`
 *
 * @install `pkgx opendev.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opendevorg
 * console.log(pkg.name)        // "opendev.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opendev-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opendevorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/opendev.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opendev.org' as const,
  fullPath: 'opendev.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx opendev.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpendevorgPackage = typeof opendevorgPackage
