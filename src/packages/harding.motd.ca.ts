/**
 * **harding.motd.ca** - Go home.
 *
 * @domain `harding.motd.ca`
 *
 * @install `pkgx harding.motd.ca`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hardingmotdca
 * console.log(pkg.name)        // "harding.motd.ca"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/harding-motd-ca.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hardingmotdcaPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/harding.motd.ca/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'harding.motd.ca' as const,
  fullPath: 'harding.motd.ca' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx harding.motd.ca' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HardingmotdcaPackage = typeof hardingmotdcaPackage
