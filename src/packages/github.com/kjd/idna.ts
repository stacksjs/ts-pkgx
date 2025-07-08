/**
 * **idna** - Package from pantry: github.com/kjd/idna
 *
 * @domain `github.com/kjd/idna`
 *
 * @install `launchpad install github.com/kjd/idna`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkjdidna
 * console.log(pkg.name)        // "idna"
 * console.log(pkg.description) // "Package from pantry: github.com/kjd/idna"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kjd/idna.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkjdidnaPackage = {
  /**
   * The display name of this package.
   */
  name: 'idna' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kjd/idna' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/kjd/idna' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/kjd/idna' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/kjd/idna -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/kjd/idna' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kjd/idna/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkjdidnaPackage = typeof githubcomkjdidnaPackage
