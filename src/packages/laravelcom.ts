/**
 * **laravel.com** - Package from pantry: laravel.com
 *
 * @domain `laravel.com`
 *
 * @install `launchpad install laravel.com`
 * @dependencies `php.net^8.2`, `getcomposer.org^2.7`, `info-zip.org/unzip^6`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.laravelcom
 * console.log(pkg.name)        // "laravel.com"
 * console.log(pkg.description) // "Package from pantry: laravel.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/laravel-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const laravelcomPackage = {
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
  description: 'Package from pantry: laravel.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install laravel.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'php.net^8.2',
    'getcomposer.org^2.7',
    'info-zip.org/unzip^6',
    'curl.se',
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/laravel.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LaravelcomPackage = typeof laravelcomPackage
