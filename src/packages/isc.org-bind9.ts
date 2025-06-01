/**
 * **isc.org-bind9** - Go home.
 *
 * @domain `isc.org-bind9`
 *
 * @install `pkgx isc.org-bind9`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.iscorgbind9
 * console.log(pkg.name)        // "isc.org-bind9"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/isc-org-bind9.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const iscorgbind9Package = {
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
  homepage: 'https://pkgx.dev/pkgs/isc.org-bind9/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'isc.org-bind9' as const,
  fullPath: 'isc.org-bind9' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx isc.org-bind9' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Iscorgbind9Package = typeof iscorgbind9Package
