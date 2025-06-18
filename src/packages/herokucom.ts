/**
 * **heroku.com** - Package from pantry: heroku.com
 *
 * @domain `heroku.com`
 *
 * @install `launchpad install heroku.com`
 * @dependencies `nodejs.org^20`, `npmjs.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.herokucom
 * console.log(pkg.name)        // "heroku.com"
 * console.log(pkg.description) // "Package from pantry: heroku.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/heroku-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const herokucomPackage = {
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
  description: 'Package from pantry: heroku.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install heroku.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
    'npmjs.com',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/heroku.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HerokucomPackage = typeof herokucomPackage
