/**
 * **awslabs** - pkgx package
 *
 * @domain `github.com/awslabs`
 *
 * @install `pkgx github.com/awslabs`
 * @name `awslabs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.awslabs
 * // Or access via domain
 * const samePkg = pantry.githubcomawslabs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "awslabs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/awslabs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awslabsPackage = {
  /**
   * The display name of this package.
   */
  name: 'awslabs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/awslabs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/awslabs' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/awslabs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/awslabs' as const,
}

export type AwslabsPackage = typeof awslabsPackage
