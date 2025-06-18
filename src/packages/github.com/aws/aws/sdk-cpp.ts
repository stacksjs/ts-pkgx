/**
 * **github.com/aws/aws-sdk-cpp** - pkgx package
 *
 * @domain `github.com/aws/aws/sdk-cpp`
 *
 * @install `pkgx github.com/aws/aws-sdk-cpp`
 * @aliases `github.com/aws/aws-sdk-cpp`, `aws/aws-sdk-cpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomawsawssdkcpp
 * // Or access via domain
 * const samePkg = pantry.githubcomawsawssdkcpp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aws"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aws/aws/sdk-cpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomawsawssdkcppPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aws/aws/sdk-cpp' as const,
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
  installCommand: 'pkgx github.com/aws/aws-sdk-cpp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/aws/aws-sdk-cpp',
    'aws/aws-sdk-cpp',
  ] as const,
  fullPath: 'github.com/aws/aws-sdk-cpp' as const,
}

export type GithubcomawsawssdkcppPackage = typeof githubcomawsawssdkcppPackage
