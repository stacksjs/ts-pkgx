/**
 * **php-cs-fixer** - A tool to automatically fix PHP Coding Standards issues
 *
 * @domain `symfony.com/cs`
 * @programs `php-cs-fixer`
 * @version `3.75.0` (48 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/symfony-com/cs.md
 *
 * @install `sh <(curl https://pkgx.sh) php-cs-fixer`
 * @name `php-cs-fixer`
 * @aliases `cs`
 * @dependencies `php.net>=7.4<8.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.phpcsfixer
 * // Or access via domain
 * const samePkg = pantry.symfonycomcs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "php-cs-fixer"
 * console.log(pkg.description) // "A tool to automatically fix PHP Coding Standard..."
 * console.log(pkg.programs)    // ["php-cs-fixer"]
 * console.log(pkg.versions[0]) // "3.75.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/symfony-com/cs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const phpcsfixerPackage = {
  /**
   * The display name of this package.
   */
  name: 'php-cs-fixer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'symfony.com/cs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A tool to automatically fix PHP Coding Standards issues' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/symfony.com/cs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) php-cs-fixer' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'php-cs-fixer',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'php.net>=7.4<8.4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.75.0',
    '3.74.0',
    '3.73.1',
    '3.73.0',
    '3.72.0',
    '3.71.0',
    '3.70.2',
    '3.70.1',
    '3.70.0',
    '3.69.1',
    '3.69.0',
    '3.68.5',
    '3.68.4',
    '3.68.3',
    '3.68.2',
    '3.68.1',
    '3.68.0',
    '3.67.1',
    '3.67.0',
    '3.66.2',
    '3.66.1',
    '3.66.0',
    '3.65.0',
    '3.64.0',
    '3.63.2',
    '3.63.1',
    '3.62.0',
    '3.61.1',
    '3.61.0',
    '3.60.0',
    '3.59.3',
    '3.59.2',
    '3.59.1',
    '3.59.0',
    '3.58.1',
    '3.58.0',
    '3.57.2',
    '3.57.1',
    '3.57.0',
    '3.56.2',
    '3.56.1',
    '3.56.0',
    '3.55.0',
    '3.54.0',
    '3.53.0',
    '3.52.1',
    '3.52.0',
    '3.51.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cs',
  ] as const,
  fullPath: 'symfony.com/cs' as const,
}

export type PhpcsfixerPackage = typeof phpcsfixerPackage
