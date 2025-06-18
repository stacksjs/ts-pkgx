/**
 * **github.com/ankitpokhrel/jira-cli** - pkgx package
 *
 * @domain `github.com/ankitpokhrel/jira/cli`
 *
 * @install `pkgx github.com/ankitpokhrel/jira-cli`
 * @aliases `github.com/ankitpokhrel/jira-cli`, `ankitpokhrel/jira-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomankitpokhreljiracli
 * // Or access via domain
 * const samePkg = pantry.githubcomankitpokhreljiracli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ankitpokhrel"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ankitpokhrel/jira/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomankitpokhreljiracliPackage = {
  /**
   * The display name of this package.
   */
  name: 'ankitpokhrel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ankitpokhrel/jira/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/ankitpokhrel/jira-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/ankitpokhrel/jira-cli',
    'ankitpokhrel/jira-cli',
  ] as const,
  fullPath: 'github.com/ankitpokhrel/jira-cli' as const,
}

export type GithubcomankitpokhreljiracliPackage = typeof githubcomankitpokhreljiracliPackage
