/**
 * **laravel** - The Laravel application installer.
 *
 * @domain `laravel.com`
 * @programs `laravel`
 * @version `5.16.0` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install laravel`
 * @aliases `laravel`
 * @dependencies `php.net^8.2`, `getcomposer.org^2.7`, `linux:info-zip.org/unzip^6` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.laravel
 * // Or access via domain
 * const samePkg = pantry.laravelcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "laravel.com"
 * console.log(pkg.description) // "The Laravel application installer."
 * console.log(pkg.programs)    // ["laravel"]
 * console.log(pkg.versions[0]) // "5.16.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/laravel-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const laravelPackage = {
  /**
   * The display name of this package.
   */
  name: 'laravel.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'laravel.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Laravel application installer.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/laravel.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install laravel' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'laravel',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'php.net^8.2',
    'getcomposer.org^2.7',
    'linux:info-zip.org/unzip^6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.16.0',
    '5.15.0',
    '5.14.1',
    '5.14.0',
    '5.13.0',
    '5.12.2',
    '5.12.1',
    '5.12.0',
    '5.11.2',
    '5.11.1',
    '5.11.0',
    '5.10.0',
    '5.9.2',
    '5.9.1',
    '5.9.0',
    '5.8.5',
    '5.8.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'laravel',
  ] as const,
}

export type LaravelPackage = typeof laravelPackage
