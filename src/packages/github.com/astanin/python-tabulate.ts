/**
 * **python-tabulate** - Package from pantry: github.com/astanin/python-tabulate
 *
 * @domain `github.com/astanin/python-tabulate`
 *
 * @install `launchpad install github.com/astanin/python-tabulate`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomastaninpythontabulate
 * console.log(pkg.name)        // "python-tabulate"
 * console.log(pkg.description) // "Package from pantry: github.com/astanin/python-..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/astanin/python-tabulate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomastaninpythontabulatePackage = {
  /**
   * The display name of this package.
   */
  name: 'python-tabulate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/astanin/python-tabulate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/astanin/python-tabulate' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/astanin/python-tabulate' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/astanin/python-tabulate -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/astanin/python-tabulate' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/astanin/python-tabulate/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomastaninpythontabulatePackage = typeof githubcomastaninpythontabulatePackage
