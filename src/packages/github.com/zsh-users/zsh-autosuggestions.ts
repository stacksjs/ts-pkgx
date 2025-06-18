/**
 * **zsh-users/zsh-autosuggestions** - Fish-like autosuggestions for zsh
 *
 * @domain `github.com/zsh-users/zsh-autosuggestions`
 * @version `0.7.1` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/zsh-users/zsh-autosuggestions -- $SHELL -i`
 * @aliases `zsh-users/zsh-autosuggestions`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.zshuserszshautosuggestions
 * // Or access via domain
 * const samePkg = pantry.githubcomzshuserszshautosuggestions
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/zsh-users/zsh-autosuggestions"
 * console.log(pkg.description) // "Fish-like autosuggestions for zsh"
 * console.log(pkg.versions[0]) // "0.7.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zsh-users/zsh-autosuggestions.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zshuserszshautosuggestionsPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/zsh-users/zsh-autosuggestions' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zsh-users/zsh-autosuggestions' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fish-like autosuggestions for zsh' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zsh-users/zsh-autosuggestions/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/zsh-users/zsh-autosuggestions -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.1',
    '0.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'zsh-users/zsh-autosuggestions',
  ] as const,
  fullPath: 'github.com/zsh-users/zsh-autosuggestions' as const,
}

export type ZshuserszshautosuggestionsPackage = typeof zshuserszshautosuggestionsPackage
