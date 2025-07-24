/**
 * **cgal.org** - Package from pantry: cgal.org
 *
 * @domain `cgal.org`
 *
 * @install `launchpad install cgal.org`
 * @dependencies `boost.org`, `eigen.tuxfamily.org`, `gnu.org/gmp`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cgalorg
 * console.log(pkg.name)        // "cgal.org"
 * console.log(pkg.description) // "Package from pantry: cgal.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cgal-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cgalorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cgal.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cgal.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cgal.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cgal.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cgal.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cgal.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'boost.org',
    'eigen.tuxfamily.org',
    'gnu.org/gmp',
    'gnu.org/mpfr',
    'openssl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cgal.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CgalorgPackage = typeof cgalorgPackage
