/**
 * **awscli-local** - Package from pantry: localstack.cloud/awscli-local
 *
 * @domain `localstack.cloud/awscli-local`
 *
 * @install `launchpad install localstack.cloud/awscli-local`
 * @dependencies `pkgx.sh^1`, `aws.amazon.com/cli^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.localstackcloudawsclilocal
 * console.log(pkg.name)        // "awscli-local"
 * console.log(pkg.description) // "Package from pantry: localstack.cloud/awscli-local"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/localstack-cloud/awscli-local.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const localstackcloudawsclilocalPackage = {
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
  description: 'Package from pantry: localstack.cloud/awscli-local' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install localstack.cloud/awscli-local' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +localstack.cloud/awscli-local -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install localstack.cloud/awscli-local' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'aws.amazon.com/cli^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/localstack.cloud/awscli-local/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LocalstackcloudawsclilocalPackage = typeof localstackcloudawsclilocalPackage
