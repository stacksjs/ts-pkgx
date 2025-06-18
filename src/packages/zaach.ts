/**
 * **zaach** - pkgx package
 *
 * @domain `github.com/zaach`
 *
 * @install `pkgx github.com/zaach`
 * @name `zaach`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zaach
 * // Or access via domain
 * const samePkg = pantry.githubcomzaach
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zaach"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zaach.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zaachPackage = {
  /**
   * The display name of this package.
   */
  name: 'zaach' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zaach' as const,
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
  installCommand: 'pkgx github.com/zaach' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/zaach' as const,
}

export type ZaachPackage = typeof zaachPackage
