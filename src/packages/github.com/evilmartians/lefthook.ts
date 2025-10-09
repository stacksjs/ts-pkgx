/**
 * **lefthook** - Fast and powerful Git hooks manager for any type of projects.
 *
 * @domain `github.com/evilmartians/lefthook`
 * @programs `lefthook`
 * @version `1.13.6` (129 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lefthook`
 * @name `lefthook`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lefthook
 * // Or access via domain
 * const samePkg = pantry.githubcomevilmartianslefthook
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lefthook"
 * console.log(pkg.description) // "Fast and powerful Git hooks manager for any typ..."
 * console.log(pkg.programs)    // ["lefthook"]
 * console.log(pkg.versions[0]) // "1.13.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/evilmartians/lefthook.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lefthookPackage = {
  /**
   * The display name of this package.
   */
  name: 'lefthook' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/evilmartians/lefthook' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast and powerful Git hooks manager for any type of projects.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/evilmartians/lefthook/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lefthook' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lefthook',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.13.6',
    '1.13.5',
    '1.13.4',
    '1.13.3',
    '1.13.2',
    '1.13.1',
    '1.13.0',
    '1.12.4',
    '1.12.3',
    '1.12.2',
    '1.12.1',
    '1.12.0',
    '1.11.16',
    '1.11.15',
    '1.11.14',
    '1.11.13',
    '1.11.12',
    '1.11.11',
    '1.11.10',
    '1.11.9',
    '1.11.8',
    '1.11.7',
    '1.11.6',
    '1.11.5',
    '1.11.4',
    '1.11.3',
    '1.11.2',
    '1.11.1',
    '1.11.0',
    '1.10.11',
    '1.10.10',
    '1.10.9',
    '1.10.8',
    '1.10.7',
    '1.10.6',
    '1.10.5',
    '1.10.4',
    '1.10.3',
    '1.10.2',
    '1.10.1',
    '1.10.0',
    '1.9.3',
    '1.9.2',
    '1.9.1',
    '1.9.0',
    '1.8.5',
    '1.8.4',
    '1.8.3',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.22',
    '1.7.21',
    '1.7.20',
    '1.7.19',
    '1.7.18',
    '1.7.17',
    '1.7.16',
    '1.7.15',
    '1.7.14',
    '1.7.13',
    '1.7.12',
    '1.7.11',
    '1.7.10',
    '1.7.9',
    '1.7.8',
    '1.7.7',
    '1.7.6',
    '1.7.5',
    '1.7.4',
    '1.7.3',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.22',
    '1.6.21',
    '1.6.20',
    '1.6.19',
    '1.6.18',
    '1.6.17',
    '1.6.16',
    '1.6.15',
    '1.6.14',
    '1.6.13',
    '1.6.12',
    '1.6.11',
    '1.6.10',
    '1.6.9',
    '1.6.8',
    '1.6.7',
    '1.6.6',
    '1.6.5',
    '1.6.4',
    '1.6.3',
    '1.6.2',
    '1.6.1',
    '1.6.0',
    '1.5.7',
    '1.5.6',
    '1.5.5',
    '1.5.4',
    '1.5.3',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.11',
    '1.4.10',
    '1.4.9',
    '1.4.8',
    '1.4.7',
    '1.4.6',
    '1.4.5',
    '1.4.4',
    '1.4.3',
    '1.4.2',
    '1.4.1',
    '1.4.0',
    '1.3.13',
    '1.3.10',
    '1.3.9',
    '1.3.8',
    '1.3.7',
    '1.3.6',
    '1.3.5',
    '1.3.4',
    '1.3.3',
    '1.3.2',
    '1.3.1',
    '1.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) lefthook -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lefthook' as const,
}

export type LefthookPackage = typeof lefthookPackage
