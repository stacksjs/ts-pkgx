/**
 * **horcrux** - Package from pantry: github.com/jesseduffield/horcrux
 *
 * @domain `github.com/jesseduffield/horcrux`
 *
 * @install `launchpad install github.com/jesseduffield/horcrux`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjesseduffieldhorcrux
 * console.log(pkg.name)        // "horcrux"
 * console.log(pkg.description) // "Package from pantry: github.com/jesseduffield/h..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jesseduffield/horcrux.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjesseduffieldhorcruxPackage = {
  /**
   * The display name of this package.
   */
  name: 'horcrux' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jesseduffield/horcrux' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/jesseduffield/horcrux' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jesseduffield/horcrux' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jesseduffield/horcrux -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jesseduffield/horcrux' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jesseduffield/horcrux/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjesseduffieldhorcruxPackage = typeof githubcomjesseduffieldhorcruxPackage
