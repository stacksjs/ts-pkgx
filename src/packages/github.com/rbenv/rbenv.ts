/**
 * **rbenv** - Manage your app's Ruby environment
 *
 * @domain `github.com/rbenv/rbenv`
 * @programs `rbenv`
 * @version `1.3.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rbenv`
 * @name `rbenv`
 * @dependencies `ruby-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rbenv
 * // Or access via domain
 * const samePkg = pantry.githubcomrbenvrbenv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rbenv"
 * console.log(pkg.description) // "Manage your app's Ruby environment"
 * console.log(pkg.programs)    // ["rbenv"]
 * console.log(pkg.versions[0]) // "1.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/rbenv/rbenv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rbenvPackage = {
  /**
   * The display name of this package.
   */
  name: 'rbenv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/rbenv/rbenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Manage your app\'s Ruby environment' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/rbenv/rbenv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rbenv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rbenv',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type RbenvPackage = typeof rbenvPackage
