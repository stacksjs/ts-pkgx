/**
 * **flit.pypa.io** - Package from pantry: flit.pypa.io
 *
 * @domain `flit.pypa.io`
 *
 * @install `launchpad install flit.pypa.io`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.flitpypaio
 * console.log(pkg.name)        // "flit.pypa.io"
 * console.log(pkg.description) // "Package from pantry: flit.pypa.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flit-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flitpypaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'flit.pypa.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flit.pypa.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: flit.pypa.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install flit.pypa.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +flit.pypa.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install flit.pypa.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/flit.pypa.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FlitpypaioPackage = typeof flitpypaioPackage
