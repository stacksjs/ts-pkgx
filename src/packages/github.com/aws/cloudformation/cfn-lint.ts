/**
 * **github.com/aws-cloudformation/cfn-lint** - pkgx package
 *
 * @domain `github.com/aws/cloudformation/cfn-lint`
 *
 * @install `pkgx github.com/aws-cloudformation/cfn-lint`
 * @aliases `github.com/aws-cloudformation/cfn-lint`, `aws-cloudformation/cfn-lint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomawscloudformationcfnlint
 * // Or access via domain
 * const samePkg = pantry.githubcomawscloudformationcfnlint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aws-cloudformation"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aws/cloudformation/cfn-lint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomawscloudformationcfnlintPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws-cloudformation' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aws/cloudformation/cfn-lint' as const,
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
  installCommand: 'pkgx github.com/aws-cloudformation/cfn-lint' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/aws-cloudformation/cfn-lint',
    'aws-cloudformation/cfn-lint',
  ] as const,
  fullPath: 'github.com/aws-cloudformation/cfn-lint' as const,
}

export type GithubcomawscloudformationcfnlintPackage = typeof githubcomawscloudformationcfnlintPackage
