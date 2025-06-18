/**
 * **tinybird.co** - Package from pantry: tinybird.co
 *
 * @domain `tinybird.co`
 *
 * @install `launchpad install tinybird.co`
 * @dependencies `pkgx.sh^1`, `python.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tinybirdco
 * console.log(pkg.name)        // "tinybird.co"
 * console.log(pkg.description) // "Package from pantry: tinybird.co"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tinybird-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tinybirdcoPackage = {
  /**
   * The display name of this package.
   */
  name: 'tinybird.co' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tinybird.co' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tinybird.co' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tinybird.co' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tinybird.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TinybirdcoPackage = typeof tinybirdcoPackage
