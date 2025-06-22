/**
 * **bytebase** - World's most advanced database DevSecOps solution for Developer, Security, DBA and Platform Engineering teams. The GitHub/GitLab for database DevSecOps.
 *
 * @domain `bytebase.com`
 * @programs `bytebase`
 * @version `3.7.1` (32 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install bytebase`
 * @aliases `bytebase`
 * @dependencies `nodejs.org>=23.11`
 * @companions `postgresql.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.bytebase
 * // Or access via domain
 * const samePkg = pantry.bytebasecom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bytebase.com"
 * console.log(pkg.description) // "World's most advanced database DevSecOps soluti..."
 * console.log(pkg.programs)    // ["bytebase"]
 * console.log(pkg.versions[0]) // "3.7.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bytebase-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bytebasePackage = {
  /**
   * The display name of this package.
   */
  name: 'bytebase.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bytebase.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'World\'s most advanced database DevSecOps solution for Developer, Security, DBA and Platform Engineering teams. The GitHub/GitLab for database DevSecOps.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bytebase.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/bytebase/bytebase' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bytebase' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bytebase',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'postgresql.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org>=23.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.7.1',
    '3.7.0',
    '3.6.2',
    '3.6.1',
    '3.6.0',
    '3.5.2',
    '3.5.1',
    '3.5.0',
    '3.4.1',
    '3.4.0',
    '3.3.1',
    '3.3.0',
    '3.2.0',
    '3.1.2',
    '3.1.1',
    '3.1.0',
    '3.0.1',
    '3.0.0',
    '2.23.1',
    '2.23.0',
    '2.22.3',
    '2.22.2',
    '2.22.1',
    '2.22.0',
    '2.21.0',
    '2.20.0',
    '2.19.0',
    '2.18.0',
    '2.17.0',
    '2.16.0',
    '2.15.0',
    '2.14.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'bytebase',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) bytebase -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bytebase' as const,
}

export type BytebasePackage = typeof bytebasePackage
