/**
 * **cdk** - Package from pantry: aws.amazon.com/cdk
 *
 * @domain `aws.amazon.com/cdk`
 *
 * @install `launchpad install aws.amazon.com/cdk`
 * @dependencies `nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.awsamazoncomcdk
 * console.log(pkg.name)        // "cdk"
 * console.log(pkg.description) // "Package from pantry: aws.amazon.com/cdk"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aws-amazon-com/cdk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awsamazoncomcdkPackage = {
  /**
   * The display name of this package.
   */
  name: 'cdk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aws.amazon.com/cdk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: aws.amazon.com/cdk' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aws.amazon.com/cdk' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +aws.amazon.com/cdk -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aws.amazon.com/cdk' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aws.amazon.com/cdk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AwsamazoncomcdkPackage = typeof awsamazoncomcdkPackage
