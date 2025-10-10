/**
 * **github.com/github/spec-kit** - pkgx package
 *
 * @domain `github.com/github/spec-kit`
 * @version `0.0.60` (22 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/github/spec-kit`
 * @dependencies `pkgx.sh>=1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgithubspeckit
 * console.log(pkg.name)        // "github.com/github/spec-kit"
 * console.log(pkg.versions[0]) // "0.0.60" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/github/spec-kit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgithubspeckitPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/github/spec-kit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/github/spec-kit' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/github/spec-kit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/github/spec-kit' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh>=1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.60',
    '0.0.58',
    '0.0.57',
    '0.0.56',
    '0.0.55',
    '0.0.53',
    '0.0.52',
    '0.0.51',
    '0.0.50',
    '0.0.49',
    '0.0.48',
    '0.0.47',
    '0.0.46',
    '0.0.45',
    '0.0.44',
    '0.0.43',
    '0.0.42',
    '0.0.41',
    '0.0.40',
    '0.0.39',
    '0.0.38',
    '0.0.37',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/github/spec-kit -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/github/spec-kit' as const,
}

export type GithubcomgithubspeckitPackage = typeof githubcomgithubspeckitPackage
