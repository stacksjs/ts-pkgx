/**
 * **linux-pam.org** - Crafters of fine Open Source products
 *
 * @domain `linux-pam.org`
 *
 * @install `pkgx linux-pam.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.linuxpamorg
 * console.log(pkg.name)        // "linux-pam.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/linux-pam-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const linuxpamorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'linux-pam.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/linux-pam.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'linux-pam.org' as const,
  fullPath: 'linux-pam.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx linux-pam.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LinuxpamorgPackage = typeof linuxpamorgPackage
