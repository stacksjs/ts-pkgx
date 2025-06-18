/**
 * **mvdan** - pkgx package
 *
 * @domain `github.com/mvdan`
 *
 * @install `pkgx github.com/mvdan`
 * @name `mvdan`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mvdan
 * // Or access via domain
 * const samePkg = pantry.githubcommvdan
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mvdan"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mvdan.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mvdanPackage = {
  /**
   * The display name of this package.
   */
  name: 'mvdan' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mvdan' as const,
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
  installCommand: 'pkgx github.com/mvdan' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mvdan' as const,
}

export type MvdanPackage = typeof mvdanPackage
