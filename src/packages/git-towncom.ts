/**
 * **git-town** - High-level command-line interface for Git
 *
 * @domain `git-town.com`
 * @programs `git-town`
 * @version `21.4.0` (58 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install git-town`
 * @name `git-town`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gittown
 * // Or access via domain
 * const samePkg = pantry.gittowncom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-town"
 * console.log(pkg.description) // "High-level command-line interface for Git"
 * console.log(pkg.programs)    // ["git-town"]
 * console.log(pkg.versions[0]) // "21.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-town-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gittownPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-town' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-town.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'High-level command-line interface for Git' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git-town.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install git-town' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-town',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '21.4.0',
    '21.3.0',
    '21.2.0',
    '21.1.0',
    '21.0.0',
    '20.2.0',
    '20.1.0',
    '20.0.0',
    '19.0.0',
    '18.3.2',
    '18.3.1',
    '18.3.0',
    '18.2.0',
    '18.1.0',
    '18.0.0',
    '17.3.0',
    '17.2.0',
    '17.1.1',
    '17.1.0',
    '17.0.0',
    '16.7.0',
    '16.6.1',
    '16.6.0',
    '16.5.0',
    '16.4.1',
    '16.4.0',
    '16.3.0',
    '16.2.1',
    '16.2.0',
    '16.1.1',
    '16.1.0',
    '16.0.0',
    '15.3.0',
    '15.2.0',
    '15.1.0',
    '15.0.0',
    '14.4.1',
    '14.4.0',
    '14.3.1',
    '14.3.0',
    '14.2.3',
    '14.2.2',
    '14.2.1',
    '14.2.0',
    '14.1.0',
    '14.0.0',
    '13.0.2',
    '13.0.1',
    '13.0.0',
    '12.1.0',
    '12.0.0',
    '11.1.0',
    '11.0.0',
    '10.0.3',
    '10.0.2',
    '10.0.1',
    '10.0.0',
    '9.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) git-town -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install git-town' as const,
}

export type GittownPackage = typeof gittownPackage
