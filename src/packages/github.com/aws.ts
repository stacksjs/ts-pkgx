/**
 * **aws** - pkgx package
 *
 * @domain `github.com/aws`
 *
 * @install `pkgx github.com/aws`
 * @name `aws`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.aws
 * // Or access via domain
 * const samePkg = pantry.githubcomaws
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aws"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aws.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awsPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aws' as const,
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
  installCommand: 'pkgx github.com/aws' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/aws' as const,
}

export type AwsPackage = typeof awsPackage
