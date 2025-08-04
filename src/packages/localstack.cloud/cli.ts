/**
 * **cli** - Package from pantry: localstack.cloud/cli
 *
 * @domain `localstack.cloud/cli`
 *
 * @install `launchpad install localstack.cloud/cli`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.localstackcloudcli
 * console.log(pkg.name)        // "cli"
 * console.log(pkg.description) // "Package from pantry: localstack.cloud/cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/localstack-cloud/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const localstackcloudcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'localstack.cloud/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: localstack.cloud/cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install localstack.cloud/cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +localstack.cloud/cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install localstack.cloud/cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/localstack.cloud/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LocalstackcloudcliPackage = typeof localstackcloudcliPackage
