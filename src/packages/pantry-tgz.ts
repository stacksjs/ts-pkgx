/**
 * **pantry.tgz** - pkgx package
 *
 * @domain `pantry.tgz`
 *
 * @install `pkgx pantry.tgz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pantrytgz
 * console.log(pkg.name)        // "pantry.tgz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pantry-tgz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pantrytgzPackage = {
  /**
   * The display name of this package.
   */
  name: 'pantry.tgz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pantry.tgz' as const,
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
  installCommand: 'pkgx pantry.tgz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'pantry.tgz' as const,
}

export type PantrytgzPackage = typeof pantrytgzPackage
