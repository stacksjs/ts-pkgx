/**
 * **jira** - simple jira command line client in Go
 *
 * @domain `github.com/ankitpokhrel/jira-cli`
 * @programs `jira`
 * @version `1.6.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jira`
 * @name `jira`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jira
 * // Or access via domain
 * const samePkg = pantry.githubcomankitpokhreljiracli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jira"
 * console.log(pkg.description) // "simple jira command line client in Go"
 * console.log(pkg.programs)    // ["jira"]
 * console.log(pkg.versions[0]) // "1.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ankitpokhrel/jira-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jiraPackage = {
  /**
   * The display name of this package.
   */
  name: 'jira' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ankitpokhrel/jira-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'simple jira command line client in Go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ankitpokhrel/jira-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jira' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jira',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.0',
    '1.5.2',
    '1.5.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) jira -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jira' as const,
}

export type JiraPackage = typeof jiraPackage
