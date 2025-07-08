/**
 * **black** - Package from pantry: github.com/psf/black
 *
 * @domain `github.com/psf/black`
 *
 * @install `launchpad install github.com/psf/black`
 * @dependencies `python.org>=3.7<3.12`, `gnu.org/which`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompsfblack
 * console.log(pkg.name)        // "black"
 * console.log(pkg.description) // "Package from pantry: github.com/psf/black"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/psf/black.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompsfblackPackage = {
  /**
   * The display name of this package.
   */
  name: 'black' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/psf/black' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/psf/black' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/psf/black' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/psf/black -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/psf/black' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
    'gnu.org/which',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/psf/black/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcompsfblackPackage = typeof githubcompsfblackPackage
