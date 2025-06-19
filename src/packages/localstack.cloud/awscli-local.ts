/**
 * **awslocal** - 💲  "awslocal" - Thin wrapper around the "aws" command line interface for use with LocalStack
 *
 * @domain `localstack.cloud/awscli-local`
 * @programs `awslocal`
 * @version `2023.12.28` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install awslocal`
 * @aliases `awslocal`
 * @dependencies `pkgx.sh^1`, `aws.amazon.com/cli^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.awslocal
 * // Or access via domain
 * const samePkg = pantry.localstackcloudawsclilocal
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "awscli-local"
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
  name: 'awscli-local' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
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
  aliases: [
    'awslocal',
  ] as const,
}

export type AwslocalPackage = typeof awslocalPackage
