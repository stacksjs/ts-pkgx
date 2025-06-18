/**
 * **aws-cloudformation** - pkgx package
 *
 * @domain `github.com/aws-cloudformation`
 *
 * @install `pkgx github.com/aws-cloudformation`
 * @name `aws-cloudformation`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.awscloudformation
 * // Or access via domain
 * const samePkg = pantry.githubcomawscloudformation
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aws-cloudformation"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aws-cloudformation.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awscloudformationPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws-cloudformation' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aws-cloudformation' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/aws-cloudformation' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/aws-cloudformation' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/aws-cloudformation' as const,
}

export type AwscloudformationPackage = typeof awscloudformationPackage
