/**
 * **composer** - Dependency Manager for PHP
 *
 * @domain `getcomposer.org`
 * @programs `composer`, `composer.phar`
 * @version `2.8.9` (30 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/getcomposer-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +getcomposer.org -- $SHELL -i`
 * @aliases `composer`
 * @dependencies `php.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.composer
 * // Or access via domain
 * const samePkg = pantry.getcomposerorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "composer"
 * console.log(pkg.description) // "Dependency Manager for PHP"
 * console.log(pkg.programs)    // ["composer", "composer.phar"]
 * console.log(pkg.versions[0]) // "2.8.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getcomposer-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const composerPackage = {
  /**
   * The display name of this package.
   */
  name: 'composer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getcomposer.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Dependency Manager for PHP' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getcomposer.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +getcomposer.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'composer',
    'composer.phar',
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
    '2.8.9',
    '2.8.8',
    '2.8.7',
    '2.8.6',
    '2.8.5',
    '2.8.4',
    '2.8.3',
    '2.8.2',
    '2.8.1',
    '2.8.0',
    '2.7.9',
    '2.7.8',
    '2.7.7',
    '2.7.6',
    '2.7.5',
    '2.7.4',
    '2.7.3',
    '2.7.2',
    '2.7.1',
    '2.7.0',
    '2.6.6',
    '2.6.5',
    '2.6.4',
    '2.6.3',
    '2.6.2',
    '2.6.1',
    '2.6.0',
    '2.5.8',
    '2.2.24',
    '2.2.23',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'composer',
  ] as const,
  fullPath: 'getcomposer.org' as const,
}

export type ComposerPackage = typeof composerPackage
