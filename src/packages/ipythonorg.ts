/**
 * **ipython.org** - Package from pantry: ipython.org
 *
 * @domain `ipython.org`
 *
 * @install `launchpad install ipython.org`
 * @dependencies `pkgx.sh^1`, `python.org>=3.7<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ipythonorg
 * console.log(pkg.name)        // "ipython.org"
 * console.log(pkg.description) // "Package from pantry: ipython.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ipython-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ipythonorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ipython.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ipython.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ipython.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ipython.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org>=3.7<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ipython.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type IpythonorgPackage = typeof ipythonorgPackage
