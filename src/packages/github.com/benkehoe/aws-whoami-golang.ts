/**
 * **aws-whoami** - A tool to show what AWS account and identity you're using.
 *
 * @domain `github.com/benkehoe/aws-whoami-golang`
 * @programs `aws-whoami`
 * @version `2.6.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install aws-whoami`
 * @name `aws-whoami`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.awswhoami
 * // Or access via domain
 * const samePkg = pantry.githubcombenkehoeawswhoamigolang
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aws-whoami"
 * console.log(pkg.description) // "A tool to show what AWS account and identity yo..."
 * console.log(pkg.programs)    // ["aws-whoami"]
 * console.log(pkg.versions[0]) // "2.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/benkehoe/aws-whoami-golang.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const awswhoamiPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws-whoami' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/benkehoe/aws-whoami-golang' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A tool to show what AWS account and identity you\'re using.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/benkehoe/aws-whoami-golang/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aws-whoami' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'aws-whoami',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) aws-whoami -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aws-whoami' as const,
}

export type AwswhoamiPackage = typeof awswhoamiPackage
