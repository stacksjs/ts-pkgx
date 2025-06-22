/**
 * **lazydocker** - Package from pantry: github.com/jesseduffield/lazydocker
 *
 * @domain `github.com/jesseduffield/lazydocker`
 *
 * @install `launchpad install github.com/jesseduffield/lazydocker`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjesseduffieldlazydocker
 * console.log(pkg.name)        // "lazydocker"
 * console.log(pkg.description) // "Package from pantry: github.com/jesseduffield/l..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jesseduffield/lazydocker.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjesseduffieldlazydockerPackage = {
  /**
   * The display name of this package.
   */
  name: 'lazydocker' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jesseduffield/lazydocker' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/jesseduffield/lazydocker' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jesseduffield/lazydocker' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jesseduffield/lazydocker -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jesseduffield/lazydocker' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jesseduffield/lazydocker/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjesseduffieldlazydockerPackage = typeof githubcomjesseduffieldlazydockerPackage
