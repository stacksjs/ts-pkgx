/**
 * **pyinvoke.org** - Package from pantry: pyinvoke.org
 *
 * @domain `pyinvoke.org`
 *
 * @install `launchpad install pyinvoke.org`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pyinvokeorg
 * console.log(pkg.name)        // "pyinvoke.org"
 * console.log(pkg.description) // "Package from pantry: pyinvoke.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pyinvoke-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pyinvokeorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pyinvoke.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pyinvoke.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pyinvoke.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pyinvoke.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pyinvoke.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PyinvokeorgPackage = typeof pyinvokeorgPackage
