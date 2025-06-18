/**
 * **litecli.com** - Package from pantry: litecli.com
 *
 * @domain `litecli.com`
 *
 * @install `launchpad install litecli.com`
 * @dependencies `pkgx.sh^1`, `sqlite.org^3.45`, `python.org~3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.liteclicom
 * console.log(pkg.name)        // "litecli.com"
 * console.log(pkg.description) // "Package from pantry: litecli.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/litecli-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liteclicomPackage = {
  /**
   * The display name of this package.
   */
  name: 'litecli.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'litecli.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: litecli.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install litecli.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'sqlite.org^3.45',
    'python.org~3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/litecli.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LiteclicomPackage = typeof liteclicomPackage
