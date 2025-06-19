/**
 * **zsh-completions** - Additional completion definitions for Zsh.
 *
 * @domain `github.com/zsh-users/zsh-completions`
 * @version `0.35.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/zsh-users/zsh-completions -- $SHELL -i`
 * @dependencies `zsh.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomzshuserszshcompletions
 * console.log(pkg.name)        // "zsh-completions"
 * console.log(pkg.description) // "Additional completion definitions for Zsh."
 * console.log(pkg.versions[0]) // "0.35.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zsh-users/zsh-completions.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomzshuserszshcompletionsPackage = {
  /**
   * The display name of this package.
   */
  name: 'zsh-completions' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zsh-users/zsh-completions' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Additional completion definitions for Zsh.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zsh-users/zsh-completions/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +github.com/zsh-users/zsh-completions -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zsh.sourceforge.io',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.35.0',
  ] as const,
  aliases: [] as const,
}

export type GithubcomzshuserszshcompletionsPackage = typeof githubcomzshuserszshcompletionsPackage
