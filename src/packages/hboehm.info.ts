/**
 * **hboehm.info** - Go home.
 *
 * @domain `hboehm.info`
 *
 * @install `pkgx hboehm.info`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hboehminfo
 * console.log(pkg.name)        // "hboehm.info"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hboehm-info.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hboehminfoPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/hboehm.info/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hboehm.info' as const,
  fullPath: 'hboehm.info' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hboehm.info' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HboehminfoPackage = typeof hboehminfoPackage
