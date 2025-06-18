/**
 * **qhull.org** - Package from pantry: qhull.org
 *
 * @domain `qhull.org`
 *
 * @install `launchpad install qhull.org`
 * @dependencies `cmake.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.qhullorg
 * console.log(pkg.name)        // "qhull.org"
 * console.log(pkg.description) // "Package from pantry: qhull.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/qhull-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qhullorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'qhull.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'qhull.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: qhull.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install qhull.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/qhull.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type QhullorgPackage = typeof qhullorgPackage
