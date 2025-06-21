/**
 * **hatch** - Package from pantry: pypa.io/hatch
 *
 * @domain `pypa.io/hatch`
 *
 * @install `launchpad install pypa.io/hatch`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pypaiohatch
 * console.log(pkg.name)        // "hatch"
 * console.log(pkg.description) // "Package from pantry: pypa.io/hatch"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-io/hatch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pypaiohatchPackage = {
  /**
   * The display name of this package.
   */
  name: 'hatch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.io/hatch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pypa.io/hatch' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pypa.io/hatch' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pypa.io/hatch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PypaiohatchPackage = typeof pypaiohatchPackage
