/**
 * **github.com/boyter/scc** - pkgx package
 *
 * @domain `github.com/boyter/scc`
 * @version `3.5.0` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/boyter/scc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomboyterscc
 * console.log(pkg.name)        // "github.com/boyter/scc"
 * console.log(pkg.versions[0]) // "3.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/boyter/scc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomboytersccPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/boyter/scc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/boyter/scc' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/boyter/scc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/boyter/scc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.0',
    '3.4.0',
    '3.3.5',
    '3.3.4',
    '3.3.3',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.0',
    '3.1.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/boyter/scc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/boyter/scc' as const,
}

export type GithubcomboytersccPackage = typeof githubcomboytersccPackage
