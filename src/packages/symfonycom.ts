/**
 * **symfony.com** - Package from pantry: symfony.com
 *
 * @domain `symfony.com`
 *
 * @install `launchpad install symfony.com`
 * @dependencies `php.net`, `gnu.org/wget`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.symfonycom
 * console.log(pkg.name)        // "symfony.com"
 * console.log(pkg.description) // "Package from pantry: symfony.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/symfony-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const symfonycomPackage = {
  /**
   * The display name of this package.
   */
  name: 'symfony.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'symfony.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: symfony.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install symfony.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'php.net',
    'gnu.org/wget',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/symfony.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SymfonycomPackage = typeof symfonycomPackage
