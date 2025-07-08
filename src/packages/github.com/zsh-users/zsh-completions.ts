/**
 * **zsh-completions** - Package from pantry: github.com/zsh-users/zsh-completions
 *
 * @domain `github.com/zsh-users/zsh-completions`
 *
 * @install `launchpad install github.com/zsh-users/zsh-completions`
 * @dependencies `zsh.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomzshuserszshcompletions
 * console.log(pkg.name)        // "zsh-completions"
 * console.log(pkg.description) // "Package from pantry: github.com/zsh-users/zsh-c..."
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
  description: 'Package from pantry: github.com/zsh-users/zsh-completions' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/zsh-users/zsh-completions' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/zsh-users/zsh-completions -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/zsh-users/zsh-completions' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zsh.sourceforge.io',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zsh-users/zsh-completions/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomzshuserszshcompletionsPackage = typeof githubcomzshuserszshcompletionsPackage
