/**
 * **awslocal** - 💲  "awslocal" - Thin wrapper around the "aws" command line interface for use with LocalStack
 *
 * @domain `localstack.cloud/awscli-local`
 * @programs `awslocal`
 * @version `2023.12.28` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install awslocal`
 * @name `awslocal`
 * @dependencies `pkgx.sh^1`, `aws.amazon.com/cli^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.awslocal
 * // Or access via domain
 * const samePkg = pantry.localstackcloudawsclilocal
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "awslocal"
 * console.log(pkg.description) // "💲  "awslocal" - Thin wrapper around the "aws" ..."
 * console.log(pkg.programs)    // ["awslocal"]
 * console.log(pkg.versions[0]) // "2023.12.28" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/localstack-cloud/awscli-local.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awslocalPackage = {
  /**
   * The display name of this package.
   */
  name: 'awslocal' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'localstack.cloud/awscli-local' as const,
  /**
   * Brief description of what this package does.
   */
  description: '💲  "awslocal" - Thin wrapper around the "aws" command line interface for use with LocalStack' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/localstack.cloud/awscli-local/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install awslocal' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'awslocal',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'aws.amazon.com/cli^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.12.28',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) awslocal -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install awslocal' as const,
}

export type AwslocalPackage = typeof awslocalPackage
