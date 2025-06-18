/**
 * **pip.pypa.io** - Package from pantry: pip.pypa.io
 *
 * @domain `pip.pypa.io`
 *
 * @install `launchpad install pip.pypa.io`
 * @dependencies `pkgx.sh^1`, `python.org~3.11`, `crates.io/semverator^0.4.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pippypaio
 * console.log(pkg.name)        // "pip.pypa.io"
 * console.log(pkg.description) // "Package from pantry: pip.pypa.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pip-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pippypaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pip.pypa.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pip.pypa.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pip.pypa.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pip.pypa.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org~3.11',
    'crates.io/semverator^0.4.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pip.pypa.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PippypaioPackage = typeof pippypaioPackage
