/**
 * **distlib** - Package from pantry: pypa.io/distlib
 *
 * @domain `pypa.io/distlib`
 *
 * @install `launchpad install pypa.io/distlib`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pypaiodistlib
 * console.log(pkg.name)        // "distlib"
 * console.log(pkg.description) // "Package from pantry: pypa.io/distlib"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-io/distlib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pypaiodistlibPackage = {
  /**
   * The display name of this package.
   */
  name: 'distlib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.io/distlib' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pypa.io/distlib' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pypa.io/distlib' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pypa.io/distlib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PypaiodistlibPackage = typeof pypaiodistlibPackage
