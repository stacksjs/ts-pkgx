/**
 * **ntp.org** - Crafters of fine Open Source products
 *
 * @domain `ntp.org`
 *
 * @install `pkgx ntp.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ntporg
 * console.log(pkg.name)        // "ntp.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ntp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ntporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ntp.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ntp.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ntp.org' as const,
  fullPath: 'ntp.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ntp.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NtporgPackage = typeof ntporgPackage
