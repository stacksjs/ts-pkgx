/**
 * **twine** - Package from pantry: github.com/pypa/twine
 *
 * @domain `github.com/pypa/twine`
 *
 * @install `launchpad install github.com/pypa/twine`
 * @dependencies `python.org>=3.7<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompypatwine
 * console.log(pkg.name)        // "twine"
 * console.log(pkg.description) // "Package from pantry: github.com/pypa/twine"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/pypa/twine.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompypatwinePackage = {
  /**
   * The display name of this package.
   */
  name: 'twine' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/pypa/twine' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/pypa/twine' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/pypa/twine' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/pypa/twine -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/pypa/twine' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/pypa/twine/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcompypatwinePackage = typeof githubcompypatwinePackage
