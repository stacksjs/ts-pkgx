/**
 * **idna** - Internationalized Domain Names for Python (IDNA 2008 and UTS #46)
 *
 * @domain `github.com/kjd/idna`
 * @version `3.10.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/kjd/idna -- $SHELL -i`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkjdidna
 * console.log(pkg.name)        // "idna"
 * console.log(pkg.description) // "Internationalized Domain Names for Python (IDNA..."
 * console.log(pkg.versions[0]) // "3.10.0" (latest)
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
  description: 'Internationalized Domain Names for Python (IDNA 2008 and UTS #46)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kjd/idna/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/kjd/idna' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +github.com/kjd/idna -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.10.0',
    '3.9.0',
    '3.8.0',
    '3.7.0',
    '3.6.0',
  ] as const,
  aliases: [] as const,
}

export type GithubcomkjdidnaPackage = typeof githubcomkjdidnaPackage
