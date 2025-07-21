/**
 * **zsh-autosuggestions** - Package from pantry: github.com/zsh-users/zsh-autosuggestions
 *
 * @domain `github.com/zsh-users/zsh-autosuggestions`
 *
 * @install `launchpad install github.com/zsh-users/zsh-autosuggestions`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomzshuserszshautosuggestions
 * console.log(pkg.name)        // "zsh-autosuggestions"
 * console.log(pkg.description) // "Package from pantry: github.com/zsh-users/zsh-a..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zsh-users/zsh-autosuggestions.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomzshuserszshautosuggestionsPackage = {
  /**
   * The display name of this package.
   */
  name: 'zsh-autosuggestions' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zsh-users/zsh-autosuggestions' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/zsh-users/zsh-autosuggestions' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/zsh-users/zsh-autosuggestions' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/zsh-users/zsh-autosuggestions -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/zsh-users/zsh-autosuggestions' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zsh-users/zsh-autosuggestions/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomzshuserszshautosuggestionsPackage = typeof githubcomzshuserszshautosuggestionsPackage
