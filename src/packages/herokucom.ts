/**
 * **heroku** - CLI for Heroku
 *
 * @domain `heroku.com`
 * @programs `heroku`
 * @version `10.10.1` (33 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install heroku`
 * @aliases `heroku`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.heroku
 * // Or access via domain
 * const samePkg = pantry.herokucom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "heroku.com"
 * console.log(pkg.description) // "CLI for Heroku"
 * console.log(pkg.programs)    // ["heroku"]
 * console.log(pkg.versions[0]) // "10.10.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/heroku-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const herokuPackage = {
  /**
   * The display name of this package.
   */
  name: 'heroku.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'heroku.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI for Heroku' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/heroku.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install heroku' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'heroku',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '10.10.1',
    '10.10.0',
    '10.9.0',
    '10.8.0',
    '10.7.0',
    '10.6.1',
    '10.6.0',
    '10.5.0',
    '10.4.1',
    '10.4.0',
    '10.3.0',
    '10.2.0',
    '10.1.0',
    '10.0.2',
    '10.0.1',
    '10.0.0',
    '9.5.1',
    '9.5.0',
    '9.4.0',
    '9.3.2',
    '9.3.1',
    '9.3.0',
    '9.2.1',
    '9.2.0',
    '9.1.0',
    '9.0.0',
    '8.11.5',
    '8.11.4',
    '8.11.3',
    '8.11.2',
    '8.11.1',
    '8.11.0',
    '8.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'heroku',
  ] as const,
}

export type HerokuPackage = typeof herokuPackage
