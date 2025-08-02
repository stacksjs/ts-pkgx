/**
 * **lazygit** - Package from pantry: github.com/jesseduffield/lazygit
 *
 * @domain `github.com/jesseduffield/lazygit`
 *
 * @install `launchpad install github.com/jesseduffield/lazygit`
 * @dependencies `git-scm.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjesseduffieldlazygit
 * console.log(pkg.name)        // "lazygit"
 * console.log(pkg.description) // "Package from pantry: github.com/jesseduffield/l..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jesseduffield/lazygit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjesseduffieldlazygitPackage = {
  /**
   * The display name of this package.
   */
  name: 'lazygit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jesseduffield/lazygit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/jesseduffield/lazygit' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jesseduffield/lazygit' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jesseduffield/lazygit -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jesseduffield/lazygit' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jesseduffield/lazygit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjesseduffieldlazygitPackage = typeof githubcomjesseduffieldlazygitPackage
