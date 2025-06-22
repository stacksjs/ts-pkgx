/**
 * **aws-sso** - A powerful tool for using AWS Identity Center for the CLI and web console.
 *
 * @domain `github.com/synfinatic/aws-sso-cli`
 * @programs `aws-sso`
 * @version `2.0.3` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install aws-sso`
 * @name `aws-sso`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.awssso
 * // Or access via domain
 * const samePkg = pantry.githubcomsynfinaticawsssocli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aws-sso"
 * console.log(pkg.description) // "A powerful tool for using AWS Identity Center f..."
 * console.log(pkg.programs)    // ["aws-sso"]
 * console.log(pkg.versions[0]) // "2.0.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/synfinatic/aws-sso-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awsssoPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws-sso' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/synfinatic/aws-sso-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A powerful tool for using AWS Identity Center for the CLI and web console.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/synfinatic/aws-sso-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aws-sso' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'aws-sso',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.3',
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.17.0',
    '1.16.1',
    '1.16.0',
    '1.15.1',
    '1.15.0',
    '1.14.3',
    '1.14.2',
    '1.14.1',
    '1.14.0',
    '1.13.1',
    '1.13.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) aws-sso -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aws-sso' as const,
}

export type AwsssoPackage = typeof awsssoPackage
