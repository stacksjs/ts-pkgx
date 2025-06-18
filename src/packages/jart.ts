/**
 * **jart** - pkgx package
 *
 * @domain `github.com/jart`
 *
 * @install `pkgx github.com/jart`
 * @name `jart`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jart
 * // Or access via domain
 * const samePkg = pantry.githubcomjart
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jart"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jart.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jartPackage = {
  /**
   * The display name of this package.
   */
  name: 'jart' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jart' as const,
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
  installCommand: 'pkgx github.com/jart' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jart' as const,
}

export type JartPackage = typeof jartPackage
