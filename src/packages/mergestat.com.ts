/**
 * **mergestat.com** - Go home.
 *
 * @domain `mergestat.com`
 *
 * @install `pkgx mergestat.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mergestatcom
 * console.log(pkg.name)        // "mergestat.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mergestat-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mergestatcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/mergestat.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mergestat.com' as const,
  fullPath: 'mergestat.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mergestat.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MergestatcomPackage = typeof mergestatcomPackage
