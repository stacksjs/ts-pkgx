/**
 * **zsh-syntax-highlighting** - Package from pantry: github.com/zsh-users/zsh-syntax-highlighting
 *
 * @domain `github.com/zsh-users/zsh-syntax-highlighting`
 *
 * @install `launchpad install github.com/zsh-users/zsh-syntax-highlighting`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomzshuserszshsyntaxhighlighting
 * console.log(pkg.name)        // "zsh-syntax-highlighting"
 * console.log(pkg.description) // "Package from pantry: github.com/zsh-users/zsh-s..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zsh-users/zsh-syntax-highlighting.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomzshuserszshsyntaxhighlightingPackage = {
  /**
   * The display name of this package.
   */
  name: 'zsh-syntax-highlighting' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zsh-users/zsh-syntax-highlighting' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/zsh-users/zsh-syntax-highlighting' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/zsh-users/zsh-syntax-highlighting' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/zsh-users/zsh-syntax-highlighting -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/zsh-users/zsh-syntax-highlighting' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zsh-users/zsh-syntax-highlighting/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomzshuserszshsyntaxhighlightingPackage = typeof githubcomzshuserszshsyntaxhighlightingPackage
