/**
 * **mackup** - Package from pantry: github.com/lra/mackup
 *
 * @domain `github.com/lra/mackup`
 *
 * @install `launchpad install github.com/lra/mackup`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlramackup
 * console.log(pkg.name)        // "mackup"
 * console.log(pkg.description) // "Package from pantry: github.com/lra/mackup"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lra/mackup.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlramackupPackage = {
  /**
   * The display name of this package.
   */
  name: 'mackup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lra/mackup' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/lra/mackup' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/lra/mackup' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/lra/mackup -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/lra/mackup' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lra/mackup/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlramackupPackage = typeof githubcomlramackupPackage
