/**
 * **amazon-ecr-credential-helper** - Package from pantry: github.com/awslabs/amazon-ecr-credential-helper
 *
 * @domain `github.com/awslabs/amazon-ecr-credential-helper`
 *
 * @install `launchpad install github.com/awslabs/amazon-ecr-credential-helper`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomawslabsamazonecrcredentialhelper
 * console.log(pkg.name)        // "amazon-ecr-credential-helper"
 * console.log(pkg.description) // "Package from pantry: github.com/awslabs/amazon-..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/awslabs/amazon-ecr-credential-helper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomawslabsamazonecrcredentialhelperPackage = {
  /**
   * The display name of this package.
   */
  name: 'amazon-ecr-credential-helper' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/awslabs/amazon-ecr-credential-helper' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/awslabs/amazon-ecr-credential-helper' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/awslabs/amazon-ecr-credential-helper' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/awslabs/amazon-ecr-credential-helper -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/awslabs/amazon-ecr-credential-helper' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/awslabs/amazon-ecr-credential-helper/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomawslabsamazonecrcredentialhelperPackage = typeof githubcomawslabsamazonecrcredentialhelperPackage
