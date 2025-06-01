/**
 * **cisco.com** - Go home.
 *
 * @domain `cisco.com`
 *
 * @install `pkgx cisco.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ciscocom
 * console.log(pkg.name)        // "cisco.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cisco-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ciscocomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/cisco.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cisco.com' as const,
  fullPath: 'cisco.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cisco.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CiscocomPackage = typeof ciscocomPackage
