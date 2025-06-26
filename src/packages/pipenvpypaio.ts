/**
 * **pipenv.pypa.io** - Package from pantry: pipenv.pypa.io
 *
 * @domain `pipenv.pypa.io`
 *
 * @install `launchpad install pipenv.pypa.io`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pipenvpypaio
 * console.log(pkg.name)        // "pipenv.pypa.io"
 * console.log(pkg.description) // "Package from pantry: pipenv.pypa.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pipenv-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pipenvpypaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pipenv.pypa.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pipenv.pypa.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pipenv.pypa.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pipenv.pypa.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pipenv.pypa.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pipenv.pypa.io' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pipenv.pypa.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PipenvpypaioPackage = typeof pipenvpypaioPackage
