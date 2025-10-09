/**
 * **squawk** - 🐘 linter for PostgreSQL, focused on migrations
 *
 * @domain `squawkhq.com`
 * @programs `squawk`
 * @version `2.28.1` (54 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install squawk`
 * @name `squawk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.squawk
 * // Or access via domain
 * const samePkg = pantry.squawkhqcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "squawk"
 * console.log(pkg.description) // "🐘 linter for PostgreSQL, focused on migrations"
 * console.log(pkg.programs)    // ["squawk"]
 * console.log(pkg.versions[0]) // "2.28.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/squawkhq-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const squawkPackage = {
  /**
   * The display name of this package.
   */
  name: 'squawk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'squawkhq.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🐘 linter for PostgreSQL, focused on migrations' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/squawkhq.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install squawk' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'squawk',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.28.1',
    '2.28.0',
    '2.27.0',
    '2.26.0',
    '2.25.1',
    '2.25.0',
    '2.24.0',
    '2.23.0',
    '2.22.0',
    '2.21.1',
    '2.21.0',
    '2.20.0',
    '2.19.0',
    '2.18.0',
    '2.17.0',
    '2.16.0',
    '2.15.0',
    '2.14.0',
    '2.13.0',
    '2.12.0',
    '2.11.0',
    '2.10.0',
    '2.9.0',
    '2.8.0',
    '2.7.0',
    '2.6.0',
    '2.5.0',
    '2.4.0',
    '2.3.0',
    '2.2.0',
    '2.1.0',
    '2.0.0',
    '1.6.1',
    '1.6.0',
    '1.5.5',
    '1.5.4',
    '1.5.3',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.0',
    '1.2.0',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.0',
    '0.29.0',
    '0.28.0',
    '0.27.0',
    '0.26.0',
    '0.25.0',
    '0.24.2',
    '0.24.1',
    '0.24.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) squawk -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install squawk' as const,
}

export type SquawkPackage = typeof squawkPackage
