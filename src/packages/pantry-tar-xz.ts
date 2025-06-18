/**
 * **pantry.tar.xz** - pkgx package
 *
 * @domain `pantry.tar.xz`
 *
 * @install `pkgx pantry.tar.xz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pantrytarxz
 * console.log(pkg.name)        // "pantry.tar.xz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pantry-tar-xz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pantrytarxzPackage = {
  /**
   * The display name of this package.
   */
  name: 'pantry.tar.xz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pantry.tar.xz' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pantry.tar.xz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'pantry.tar.xz' as const,
}

export type PantrytarxzPackage = typeof pantrytarxzPackage
