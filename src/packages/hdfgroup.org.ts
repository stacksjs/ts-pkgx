/**
 * **hdfgroup.org** - Go home.
 *
 * @domain `hdfgroup.org`
 *
 * @install `pkgx hdfgroup.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hdfgrouporg
 * console.log(pkg.name)        // "hdfgroup.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hdfgroup-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hdfgrouporgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/hdfgroup.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hdfgroup.org' as const,
  fullPath: 'hdfgroup.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hdfgroup.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HdfgrouporgPackage = typeof hdfgrouporgPackage
