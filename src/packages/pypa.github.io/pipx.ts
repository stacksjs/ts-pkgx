/**
 * **pipx** - Package from pantry: pypa.github.io/pipx
 *
 * @domain `pypa.github.io/pipx`
 *
 * @install `launchpad install pypa.github.io/pipx`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pypagithubiopipx
 * console.log(pkg.name)        // "pipx"
 * console.log(pkg.description) // "Package from pantry: pypa.github.io/pipx"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-github-io/pipx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pypagithubiopipxPackage = {
  /**
   * The display name of this package.
   */
  name: 'pipx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.github.io/pipx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pypa.github.io/pipx' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pypa.github.io/pipx' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pypa.github.io/pipx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pypa.github.io/pipx' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pypa.github.io/pipx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PypagithubiopipxPackage = typeof pypagithubiopipxPackage
