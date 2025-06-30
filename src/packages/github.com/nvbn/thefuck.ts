/**
 * **thefuck** - Package from pantry: github.com/nvbn/thefuck
 *
 * @domain `github.com/nvbn/thefuck`
 *
 * @install `launchpad install github.com/nvbn/thefuck`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnvbnthefuck
 * console.log(pkg.name)        // "thefuck"
 * console.log(pkg.description) // "Package from pantry: github.com/nvbn/thefuck"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nvbn/thefuck.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnvbnthefuckPackage = {
  /**
   * The display name of this package.
   */
  name: 'thefuck' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nvbn/thefuck' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/nvbn/thefuck' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/nvbn/thefuck' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/nvbn/thefuck -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/nvbn/thefuck' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nvbn/thefuck/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomnvbnthefuckPackage = typeof githubcomnvbnthefuckPackage
