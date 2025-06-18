/**
 * **sfcgal.org** - Package from pantry: sfcgal.org
 *
 * @domain `sfcgal.org`
 *
 * @install `launchpad install sfcgal.org`
 * @dependencies `boost.org`, `cgal.org`, `gnu.org/gmp`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sfcgalorg
 * console.log(pkg.name)        // "sfcgal.org"
 * console.log(pkg.description) // "Package from pantry: sfcgal.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sfcgal-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sfcgalorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'sfcgal.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sfcgal.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sfcgal.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install sfcgal.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'boost.org',
    'cgal.org',
    'gnu.org/gmp',
    'gnu.org/mpfr',
    'cmake.org',
    'gnu.org/gcc',
    'gnu.org/make',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sfcgal.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SfcgalorgPackage = typeof sfcgalorgPackage
