/**
 * **github.com/awslabs/amazon-ecr-credential-helper** - pkgx package
 *
 * @domain `github.com/awslabs/amazon/ecr-credential-helper`
 *
 * @install `pkgx github.com/awslabs/amazon-ecr-credential-helper`
 * @aliases `github.com/awslabs/amazon-ecr-credential-helper`, `awslabs/amazon-ecr-credential-helper`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomawslabsamazonecrcredentialhelper
 * // Or access via domain
 * const samePkg = pantry.githubcomawslabsamazonecrcredentialhelper
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "awslabs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/awslabs/amazon/ecr-credential-helper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomawslabsamazonecrcredentialhelperPackage = {
  /**
   * The display name of this package.
   */
  name: 'awslabs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/awslabs/amazon/ecr-credential-helper' as const,
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
  installCommand: 'pkgx github.com/awslabs/amazon-ecr-credential-helper' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/awslabs/amazon-ecr-credential-helper',
    'awslabs/amazon-ecr-credential-helper',
  ] as const,
  fullPath: 'github.com/awslabs/amazon-ecr-credential-helper' as const,
}

export type GithubcomawslabsamazonecrcredentialhelperPackage = typeof githubcomawslabsamazonecrcredentialhelperPackage
