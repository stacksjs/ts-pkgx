/**
 * **jira-cli** - Package from pantry: github.com/ankitpokhrel/jira-cli
 *
 * @domain `github.com/ankitpokhrel/jira-cli`
 *
 * @install `launchpad install github.com/ankitpokhrel/jira-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomankitpokhreljiracli
 * console.log(pkg.name)        // "jira-cli"
 * console.log(pkg.description) // "Package from pantry: github.com/ankitpokhrel/ji..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ankitpokhrel/jira-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomankitpokhreljiracliPackage = {
  /**
   * The display name of this package.
   */
  name: 'jira-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ankitpokhrel/jira-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/ankitpokhrel/jira-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/ankitpokhrel/jira-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/ankitpokhrel/jira-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/ankitpokhrel/jira-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ankitpokhrel/jira-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomankitpokhreljiracliPackage = typeof githubcomankitpokhreljiracliPackage
