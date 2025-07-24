/**
 * **urllib3** - Package from pantry: github.com/urllib3/urllib3
 *
 * @domain `github.com/urllib3/urllib3`
 *
 * @install `launchpad install github.com/urllib3/urllib3`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomurllib3urllib3
 * console.log(pkg.name)        // "urllib3"
 * console.log(pkg.description) // "Package from pantry: github.com/urllib3/urllib3"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/urllib3/urllib3.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomurllib3urllib3Package = {
  /**
   * The display name of this package.
   */
  name: 'urllib3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/urllib3/urllib3' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/urllib3/urllib3' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/urllib3/urllib3' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/urllib3/urllib3 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/urllib3/urllib3' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/urllib3/urllib3/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomurllib3urllib3Package = typeof githubcomurllib3urllib3Package
