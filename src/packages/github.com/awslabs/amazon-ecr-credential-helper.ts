/**
 * **docker-credential-ecr-login** - Automatically gets credentials for Amazon ECR on docker push/docker pull
 *
 * @domain `github.com/awslabs/amazon-ecr-credential-helper`
 * @programs `docker-credential-ecr-login`
 * @version `0.10.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install docker-credential-ecr-login`
 * @aliases `docker-credential-ecr-login`
 * @dependencies `gnu.org/bash`, `gnu.org/make`, `git-scm.org`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.dockercredentialecrlogin
 * // Or access via domain
 * const samePkg = pantry.githubcomawslabsamazonecrcredentialhelper
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "amazon-ecr-credential-helper"
 * console.log(pkg.description) // "Automatically gets credentials for Amazon ECR o..."
 * console.log(pkg.programs)    // ["docker-credential-ecr-login"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/awslabs/amazon-ecr-credential-helper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dockercredentialecrloginPackage = {
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
  description: 'Automatically gets credentials for Amazon ECR on docker push/docker pull' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/awslabs/amazon-ecr-credential-helper/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/awslabs/amazon-ecr-credential-helper' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install docker-credential-ecr-login' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'docker-credential-ecr-login',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/bash',
    'gnu.org/make',
    'git-scm.org',
    'go.dev^1.21',
    'gnu.org/grep',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.0',
    '0.9.1',
    '0.9.0',
    '0.8.0',
    '0.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'docker-credential-ecr-login',
  ] as const,
}

export type DockercredentialecrloginPackage = typeof dockercredentialecrloginPackage
