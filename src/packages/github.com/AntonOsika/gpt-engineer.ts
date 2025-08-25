/**
 * **github.com/AntonOsika/gpt-engineer** - pkgx package
 *
 * @domain `github.com/AntonOsika/gpt-engineer`
 * @version `0.3.1` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/AntonOsika/gpt-engineer`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomantonosikagptengineer
 * console.log(pkg.name)        // "github.com/AntonOsika/gpt-engineer"
 * console.log(pkg.versions[0]) // "0.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AntonOsika/gpt-engineer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomantonosikagptengineerPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/AntonOsika/gpt-engineer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AntonOsika/gpt-engineer' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AntonOsika/gpt-engineer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/AntonOsika/gpt-engineer' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.1',
    '0.3.0',
    '0.2.9',
    '0.2.7',
    '0.2.5',
    '0.2.4',
    '0.2.3',
    '0.2.1',
    '0.0.9',
    '0.0.8',
    '0.0.7',
    '0.0.6',
    '0.0.5',
    '0.0.4',
    '0.0.3',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/AntonOsika/gpt-engineer -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/AntonOsika/gpt-engineer' as const,
}

export type GithubcomantonosikagptengineerPackage = typeof githubcomantonosikagptengineerPackage
