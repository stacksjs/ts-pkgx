/**
 * **intel.com** - Go home.
 *
 * @domain `intel.com`
 *
 * @install `pkgx intel.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.intelcom
 * console.log(pkg.name)        // "intel.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/intel-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const intelcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/intel.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'intel.com' as const,
  fullPath: 'intel.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx intel.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type IntelcomPackage = typeof intelcomPackage
