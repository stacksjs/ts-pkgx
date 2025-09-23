/**
 * **symfony** - The Symfony CLI tool
 *
 * @domain `symfony.com`
 * @programs `symfony`
 * @version `5.14.2` (54 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install symfony`
 * @name `symfony`
 * @dependencies `php.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.symfony
 * // Or access via domain
 * const samePkg = pantry.symfonycom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "symfony"
 * console.log(pkg.description) // "The Symfony CLI tool"
 * console.log(pkg.programs)    // ["symfony"]
 * console.log(pkg.versions[0]) // "5.14.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/symfony-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const symfonyPackage = {
  /**
   * The display name of this package.
   */
  name: 'symfony' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'symfony.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Symfony CLI tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/symfony.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install symfony' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'symfony',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'php.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.14.2',
    '5.14.1',
    '5.14.0',
    '5.13.0',
    '5.12.0',
    '5.11.0',
    '5.10.9',
    '5.10.8',
    '5.10.7',
    '5.10.6',
    '5.10.5',
    '5.10.4',
    '5.10.3',
    '5.10.2',
    '5.10.1',
    '5.10.0',
    '5.9.1',
    '5.9.0',
    '5.8.19',
    '5.8.18',
    '5.8.17',
    '5.8.16',
    '5.8.15',
    '5.8.14',
    '5.8.13',
    '5.8.12',
    '5.8.11',
    '5.8.10',
    '5.8.9',
    '5.8.8',
    '5.8.7',
    '5.8.6',
    '5.8.5',
    '5.8.4',
    '5.8.3',
    '5.8.2',
    '5.8.1',
    '5.8.0',
    '5.7.8',
    '5.7.7',
    '5.7.6',
    '5.7.5',
    '5.7.4',
    '5.7.3',
    '5.7.2',
    '5.7.1',
    '5.7.0',
    '5.6.2',
    '5.6.1',
    '5.6.0',
    '5.5.10',
    '5.5.9',
    '5.5.8',
    '5.5.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) symfony -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install symfony' as const,
}

export type SymfonyPackage = typeof symfonyPackage
