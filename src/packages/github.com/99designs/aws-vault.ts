/**
 * **aws-vault** - A vault for securely storing and accessing AWS credentials in development environments
 *
 * @domain `github.com/99designs/aws-vault`
 * @programs `aws-vault`
 * @version `7.2.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install aws-vault`
 * @name `aws-vault`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.awsvault
 * // Or access via domain
 * const samePkg = pantry.githubcom99designsawsvault
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aws-vault"
 * console.log(pkg.description) // "A vault for securely storing and accessing AWS ..."
 * console.log(pkg.programs)    // ["aws-vault"]
 * console.log(pkg.versions[0]) // "7.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/99designs/aws-vault.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awsvaultPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws-vault' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/99designs/aws-vault' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A vault for securely storing and accessing AWS credentials in development environments' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/99designs/aws-vault/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aws-vault' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'aws-vault',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) aws-vault -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aws-vault' as const,
}

export type AwsvaultPackage = typeof awsvaultPackage
