/**
 * **laravel.com** - Package from pantry: laravel.com
 *
 * @domain `laravel.com`
 *
 * @install `launchpad install laravel.com`
 * @dependencies `php.net^8.2`, `getcomposer.org^2.7`, `linux:info-zip.org/unzip^6` (includes OS-specific dependencies with `os:package` format)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install laravel.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +laravel.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install laravel.com' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/laravel.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LaravelcomPackage = typeof laravelcomPackage
