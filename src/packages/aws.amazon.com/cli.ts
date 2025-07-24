/**
 * **cli** - Package from pantry: aws.amazon.com/cli
 *
 * @domain `aws.amazon.com/cli`
 *
 * @install `launchpad install aws.amazon.com/cli`
 * @dependencies `sourceware.org/libffi^3`, `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.awsamazoncomcli
 * console.log(pkg.name)        // "cli"
 * console.log(pkg.description) // "Package from pantry: aws.amazon.com/cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aws-amazon-com/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awsamazoncomcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aws.amazon.com/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: aws.amazon.com/cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aws.amazon.com/cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +aws.amazon.com/cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aws.amazon.com/cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/libffi^3',
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aws.amazon.com/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AwsamazoncomcliPackage = typeof awsamazoncomcliPackage
