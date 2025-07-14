/**
 * **cookiecutter** - Package from pantry: github.com/cookiecutter/cookiecutter
 *
 * @domain `github.com/cookiecutter/cookiecutter`
 *
 * @install `launchpad install github.com/cookiecutter/cookiecutter`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcookiecuttercookiecutter
 * console.log(pkg.name)        // "cookiecutter"
 * console.log(pkg.description) // "Package from pantry: github.com/cookiecutter/co..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cookiecutter/cookiecutter.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcookiecuttercookiecutterPackage = {
  /**
   * The display name of this package.
   */
  name: 'cookiecutter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cookiecutter/cookiecutter' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/cookiecutter/cookiecutter' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/cookiecutter/cookiecutter' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/cookiecutter/cookiecutter -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/cookiecutter/cookiecutter' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cookiecutter/cookiecutter/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcookiecuttercookiecutterPackage = typeof githubcomcookiecuttercookiecutterPackage
